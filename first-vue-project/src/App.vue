<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ashrafUzzaman msg="Welcome to Ashraf's World"></ashrafUzzaman>
  </div>
</template>

<script>
import ashrafUzzaman from "./components/hi.vue";

export default {
  name: "App",
  components: {
    ashrafUzzaman,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
