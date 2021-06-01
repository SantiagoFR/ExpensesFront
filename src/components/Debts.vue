<template>
    <div class="container">
        <div class="flex-row align-items-center justify-content-between">
            <h2 class="title">Minimum payments</h2>
        </div>
        <table>
            <tr>
                <th>Payment</th>
                <th>Amount</th>
            </tr>
            <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index }}</td>
                <td>{{ payment }} €</td>
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
          payments: []
      }
  },
  methods: {
      getMinimumPayments() {
          ExpensesDataService.getMinimumPayments()
          .then((response: any) => {
              this.payments = response.data
          }).catch((e: Error) => {
              console.log(e)
          })
      }
  },
  created() {
      this.getMinimumPayments()
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
