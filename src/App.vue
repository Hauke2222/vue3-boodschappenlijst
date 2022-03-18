<template>
  <h1>Vue3 boodschappenlijst</h1>
  <br />
  <groceries-table />
</template>

<script setup>
import GroceriesTable from "./components/GroceriesTable.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
