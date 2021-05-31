<template>
    <div class="container">
        <div class="flex-row align-items-center justify-content-between">
            <h2 class="title">Gastos compartidos</h2>
            <button class="submit-button"><router-link to="/expenses/add">Añadir gastos</router-link></button>
        </div>
        <table>
            <tr>
                <th>Pagado por:</th>
                <th class="text-center">Descripción</th>
                <th></th>
            </tr>
            <tr v-for="(expense, index) in expenses" :key="index">
                <td>{{ expense.author }}</td>
                <td class="text-center">{{ expense.description }}</td>
                <td style="line-height: 0.3">
                    <p>{{ expense.amount }} €</p> 
                    <p>{{ fromNow(expense.date) }}</p>
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
import moment from 'moment'


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
      },
      fromNow(date: Date) {
        return moment(date).fromNow()
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
        border-collapse: collapse;
    }
    th {
        background-color: #36304a;
        color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    table th.clickable:hover{
        background: #d4dbe2;
    }
    tr:nth-child(even) {
        background-color: #f5f5f5;
    }

</style>
