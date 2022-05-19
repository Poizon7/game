<script>
import Stone from '../components/Stone.vue'

export default {
  components: {
    Stone
  },
  props: {
    id: Number,
    Adding: Boolean,
    wall: Boolean,
    player: Boolean
  },
  data() {
    return {
      hasStone: false
    }
  }
}
</script>

<template>
  <div class="tile" :class="(id + (id / 8 % 2 > 1) + (id % 16 == 0)) % 2 == 1 ? 'dark' : 'light'" :id="id">
    <input type="button" v-if="Adding && !hasStone" class="add-button" @click="$emit('add', id), hasStone = true" @startMove="$emit('startMove', id)">
    <Stone v-if="hasStone" :wall="wall" :player="player"/>
  </div>
</template>

<style scoped>
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dark {
  background-color: chocolate;
}

.light {
  background-color: burlywood;
}

.add-button {
  background-color: lightblue;
  width: 20%;
  height: 20%;
  border-radius: 50%;
}
</style>