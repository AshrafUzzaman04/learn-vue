<template>
  <div id="app">
    <div>
      <allFirend :friends="friends" @delete="deleteFriend"></allFirend>
      <onlineFirend :friends="friends"></onlineFirend>
      <offlineFirend :friends="friends"></offlineFirend>
      <!-- <hookComponent></hookComponent> -->
      <axiosRequest></axiosRequest>
    </div>
  </div>
</template>

<script>
import allFirend from "./components/allFriend.vue";
import onlineFirend from "./components/onlineFriend.vue";
import offlineFirend from "./components/oflineFirend.vue";
import axiosRequest from "./components/axiosRequest.vue";
// import hookComponent from "./components/hookComponent.vue";

export default {
  name: "App",
  data() {
    return {
      friends: [
        { name: "ashraf", active: true },
        {
          name: "mahim",
          active: false,
        },
        { name: "zaman", active: true },
        { name: "Bipu", active: false },
        { name: "Sefuda", active: true },
        { name: "Tanha", active: true },
        { name: "Rusha", active: true },
        { name: "Rittika", active: true },
        { name: "Ridita", active: true },
        { name: "Jannatul Ferdaouse", active: true },
      ],
    };
  },
  components: {
    allFirend,
    onlineFirend,
    offlineFirend,
    // hookComponent,
    axiosRequest,
  },

  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter((f) => {
        return f.name !== payload.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  > div {
    height: 100vh;
    display: flex;
    flex-direction: row;
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
  }
}
</style>
