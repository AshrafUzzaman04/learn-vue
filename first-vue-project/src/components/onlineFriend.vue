<template>
  <div id="onlineFirend">
    <div>
      <h2>Online Friends</h2>
      <ul>
        <li v-for="(friend, index) in friends" :key="index">
          <span v-if="friend.active">{{ friend.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "onlineFirend",
  props: {
    friends: Array,
  },
};
</script>

<style lang="scss" scoped></style>
