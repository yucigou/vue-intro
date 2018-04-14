<template>
  <div>
    <input type="text" size="70" v-model="url">
    <fieldset>
      <legend>Output</legend>
      <textarea id="output" cols="56" rows="10" v-model="output"></textarea>
    </fieldset>
    <button @click="downloadData">Download</button>
    <button @click="downloadZip">Download Zipped File</button>
  </div>
</template>

<script>
import JSZip from 'jszip';
import FileSaver from 'file-saver';
// import * as JSZip from 'jszip';
// import * as FileSaver from 'file-saver';
// let JSZip = require("jszip");
// let FileSaver = require('file-saver');

export default {
  name: "Xslt",
  data() {
    return {
      url:
        "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=cancer",
      xhttp: {},
      output: ""
    };
  },
  watch: {
    url: function() {
      this.output = this.transform();
    }
  },
  created() {
    if (window.ActiveXObject) {
      this.xhttp = new window.ActiveXObject("Msxml2.XMLHTTP");
    } else {
      this.xhttp = new XMLHttpRequest();
    }
  },
  methods: {
    loadXMLDoc: function(filename) {
      this.xhttp.open("GET", filename, false);
      try {
        this.xhttp.responseType = "msxml-document";
      } catch (err) {}
      this.xhttp.send("");
      return this.xhttp.responseXML;
    },
    download: function(filename, text) {
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    downloadData: function() {
      this.download("idlist.txt", this.output);
    },
    downloadZip: function() {
      var zip = new JSZip();
      zip.file("idlist.txt", this.output);
      zip.generateAsync({type: "blob"}).then(function(content) {
        FileSaver.saveAs(content, "download.zip");
      });
    },
    transform: function() {
      let xml = this.loadXMLDoc(this.url);
      let xsl = this.loadXMLDoc(
        "https://yucigou.github.io/staticfs/xsl/rest2ids.xsl"
      );
      if (window.ActiveXObject || this.xhttp.responseType === "msxml-document") {
        return xml.transformNode(xsl);
      } else if (
        document.implementation &&
        document.implementation.createDocument
      ) {
        // code for Chrome, Firefox, Opera, etc.
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        let resultDocument = xsltProcessor.transformToFragment(xml, document);
        return resultDocument.textContent;
      }
    }
  },
  mounted() {
    this.output = this.transform();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
