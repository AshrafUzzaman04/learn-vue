<template>
  <div class="about">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "This is About Page"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
