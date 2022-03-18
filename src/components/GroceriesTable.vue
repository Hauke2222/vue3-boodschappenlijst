<template>
  <table style="width: 50%">
    <thead>
      <tr>
        <td>Naam</td>
        <td>Prijs</td>
        <td>Aantal</td>
        <td>Totaal</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(grocery, index) in groceriesList" :key="index">
        <td>{{ grocery.name }}</td>
        <td>{{ "€" + grocery.price }}</td>
        <td>
          <input
            type="number"
            pattern=" 0+\.[0-9]*[1-9][0-9]*$"
            min="0"
            v-model="grocery.quantity"
          />
        </td>
        <td>€ {{ grocery.subTotal }}</td>
      </tr>
      <tr>
        <td><b>Totaal:</b></td>
        <td>-</td>
        <td></td>
        <td id="totalCost">
          <b>{{ "€" + totalPrice }}</b>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed, ref } from "vue";
import Grocery from "../grocery";

const groceriesList = ref([
  new Grocery("Brood", "2.50", 1),
  new Grocery("Kaas", "4.99", 1),
  new Grocery("Eieren", "2.99", 1),
  new Grocery("Noten", "3.99", 1),
]);
const totalPrice = computed(() => {
  return groceriesList.value
    .map((grocery) => grocery.subTotal)
    .reduce((total, amount) => total + parseFloat(amount), 0)
    .toFixed(2);
});
</script>

<style>
table {
  border: 1px solid black;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
th,
td {
  border: 1px solid lightgray;
  text-align: center;
}
#totalCost {
  background-color: lightgray;
}
</style>
