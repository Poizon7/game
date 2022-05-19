<script>
import Tile from '../components/Tile.vue'

export default {
  components: {
    Tile
  },
  data () {
    return {
      Adding: false,
      wall: false,
      currentPlayer: false
    }
  },
  methods: {
    StartMove (id) {
      
    }
  }
}
</script>

<template>
  <div id="board">
    <Tile v-for="key in 64" 
    :key="key" :id="key" 
    :Adding="Adding" 
    :wall="wall" 
    :player="currentPlayer" 
    @add="Adding = false, currentPlayer = !currentPlayer" 
    @startMove="StartMove"
    />
  </div>
  <div id="controls">
    <div id="p1" v-if="!currentPlayer">
      <h2>Player 1</h2>
      <input type="button" value="Add stone" @click="Adding = !Adding">
      <input type="checkbox" name="wall" id="" v-model="wall">
      <label for="wall">wall</label>
    </div>
    <div id="p2" v-else>
      <h2>Player 2</h2>
      <input type="button" value="Add stone" @click="Adding = !Adding">
      <input type="checkbox" name="wall" id="" v-model="wall">
      <label for="wall">wall</label>
    </div>
  </div>
</template>

<style scoped>
#board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 80vh;
  height: 80vh;
}
</style>