<template>
    <div>
        <h1>Success</h1>
        <p>{{ name }}</p>
        <p>{{ email }}</p>
        <button @click='logout'>Logout</button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data () {
    return {
      name: "",
      email: "",
      user: {}
    };
  },
  created () {
    let vm = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user;
        vm.name = vm.user.displayName;
        vm.email = vm.user.email;
      }
    });
  },
  methods: {
    logout () {
      firebase.auth().signOut();
    }
  }
};
</script>
