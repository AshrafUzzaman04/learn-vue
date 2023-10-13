<template>
  <div class="axiosRequest">
    <!-- adding a filter search -->
    <input type="text" placeholder="search..." v-model="searchName" />
    <div v-for="post in filterSearch" :key="post.id">
      <p>Name: {{ post.name }}</p>
      <p>Email: {{ post.email }}</p>
      <!-- globally declare filter snippet -->
      <p>Body: {{ $filters.snippet(post.body) }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "axiosRequest",
  data() {
    return {
      posts: [],
      searchName: "",
    };
  },
  computed: {
    filterSearch() {
      return this.posts.filter((post) => {
        return post.name.match(this.searchName);
      });
    },
  },
  mounted() {
    // get axios get request
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.axiosRequest {
  div {
    max-width: 500px;
    > p {
      font-weight: bold;
      color: blue;
    }
  }
}
</style>
