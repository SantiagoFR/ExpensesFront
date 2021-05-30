<template>
  <div class="container">
      <h4>Gastos compartidos</h4>
      <table style="table">
          <tr>
              <th>Pagado por:</th>
              <th class="clickable">Añadir amigo</th>
              <th class="clickable">
                  <router-link
                    to="/add"
                    class="badge badge-warning"
                    >Añadir pago</router-link>
              </th>
          </tr>
          <tr v-for="(expense, index) in expenses" :key="index">
              <td>{{ expense.author }}</td>
              <td colspan="2" class="d-grid">
                  <p>{{ expense.amount }} €</p> 
                  <p>{{ expense.date }}</p>
              </td>
          </tr>
      </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Expense from '@/types/Expense'
import ExpenseDataService from '@/services/ExpensesDataService'
import ResponseData from '@/types/ResponseData'


export default defineComponent({
  name: 'Expenses',
  data() {
      return {
          expenses: [] as Expense[]
      }
  },
  methods: {
      getExpenses() {
          ExpenseDataService.getAll()
          .then((response: ResponseData) => {
              this.expenses = response.data
          }).catch((e: Error) => {
              console.log(e)
          })
      } 
  },
  created() {
      this.getExpenses()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        width: 100%;
    }
    table, th, td {
        border:solid 1px #42b983
    }
    table th.clickable:hover{
        background: #d4dbe2;
    }
</style>
