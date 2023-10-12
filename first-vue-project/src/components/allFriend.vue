<template>
  <div id="allFirend">
    <div>
      <h2>All Friends</h2>
      <ul>
        <li v-for="(friend, index) in friends" :key="index">
          <span>{{ friend.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "allFirend",
  props: {
    friends: Array,
  },
  methods: {
    delete() {},
  },
};
</script>

<style lang="scss">
div {
  > ul {
    padding-left: 0;
    text-align: center;
    > li {
      list-style: none;
      line-height: 30px;
      font-weight: bold;
      text-transform: uppercase;
      color: #41b883;
      cursor: grab;
    }
  }
}
</style>
