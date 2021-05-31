<template>
    <div class="container">
        <div class="flex-row align-items-center justify-content-between">
            <h2 class="title">Balance</h2>
        </div>
        <table>
            <tr>
                <th>Deudor</th>
                <th>Cantidad</th>
            </tr>
            <tr v-for="(item, index) in balance" :key="index">
                <td>{{ index }}</td>
                <td :class="{ red: item < 0, green: item >= 0 }">{{ item }} €</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExpensesDataService from '../services/ExpensesDataService';



export default defineComponent({
  name: 'Balance',
  data() {
      return {
          balance: []
      }
  },
  methods: {
      getBalance() {
          ExpensesDataService.getBalance()
          .then((response: any) => {
              this.balance = response.data
          }).catch((e: Error) => {
              console.log(e)
          })
      }
  },
  created() {
      this.getBalance()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
    line-height: 2em;
}
.red {
    color: red
}
.green {
    color: green
}
</style>
