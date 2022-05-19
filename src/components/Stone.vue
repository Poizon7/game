<script>
export default {
  props: {
    wall: Boolean,
    player: Boolean
  },
  data () {
    return {
      isWall: false,
      isPlayer: false
    }
  },
  mounted () {
    this.isWall = this.wall
    this.isPlayer = this.player
  }
}
</script>

<template>
  <input v-if="player == isPlayer" type="button" :class="{ wall: isWall, player2: isPlayer }" @click="$emit('startMove')">
  <div v-else :class="{ wall: isWall, player2: isPlayer }"></div>
</template>

<style scoped>
div, input {
  width: 60%;
  height: 60%;
  background-color: wheat;
}

.wall {
  height: 20%;
}

.player2 {
  background-color: brown;
}
</style>