<template>
  <div id="hookComponent">
    <h2>{{ title }}</h2>
    <button @click="changeTitle">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "hookComponent",
  data() {
    return {
      title: "This is Hook",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Ashraf Uzzaman";
    },
  },

  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("ok");
  },
  beforeUpdate() {
    alert("Click ok to update title");
  },
};
</script>

<style lang="scss"></style>
