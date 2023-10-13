<template>
  <div class="profile">
    <h2>Profile: {{ title }}</h2>
    <h2>User ID: {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      title: "Profile",
      userId: null // Initialize userId to null
    };
  },
  created() {
    this.usersId(); // Call the method to set the initial value of userId
  },
  methods: {
    usersId() {
      this.userId = this.$route.params.user_id;
    }
  },
  watch: {
    $route: "usersId"
  }
};
</script>

<style scoped></style>
