<template>
  <div class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <ul>
      <li v-for="(profile, index) in profiles" :key="index">
        <router-link :to="{ name: 'Profile', params: { user_id: profile } }"
          >Profile {{ profile }}</router-link
        >
      </li>
    </ul>

    <button @click="Home">Home</button>
    <button @click="About">About</button>
    <button @click="Back">Back</button>
    <button @click="Forward">Forward</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      profiles: ["1", "2", "3", "4", "5"]
    };
  },
  methods: {
    Home() {
      this.$router.push({ name: "Home" });
    },
    About() {
      this.$router.push({ name: "About" });
    },
    Back() {
      this.$router.go(-1);
    },
    Forward() {
      this.$router.go(1);
    }
  }
};
</script>
<style>
ul {
  padding: 10px 0px;
  margin: 0;
  display: flex;
  text-align: center;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
}
ul li {
  list-style: none;
  cursor: pointer;
}

ul li:hover {
  text-decoration: underline;
}
a {
  text-decoration: none;
}
a.router-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>
