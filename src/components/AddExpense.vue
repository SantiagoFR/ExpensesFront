<template>
    <div class="container">
        <div class="input-group">
            <label for="author">Author</label>
            <input 
                type="text"
                required
                v-model="expense.author"
                name="author"
                id="author"
            >
        </div>
        <div class="input-group">
            <label for="amount">Amount</label>
            <input 
                type="text"
                required
                v-model="expense.amount"
                name="amount"
                id="amount"
            >
        </div>
        <div class="input-group">
            <label for="date">Date</label>
            <input 
                type="date"
                required
                v-model="expense.date"
                name="date"
                id="date"
            >
        </div>
        <div class="input-group">
            <label for="description">Description</label>
            <input 
                type="text"
                required
                v-model="expense.description"
                name="description"
                id="description"
            >
        </div>

        <button type="submit" @click="addExpense">Enviar gasto</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Expense from '@/types/Expense'
import ExpenseDataService from '@/services/ExpensesDataService'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: "add-expense",
    data() {
        return {
            expense: {
                id: null,
                author: "",
                description: "",
                amount: 0,
                date: new Date()
            } as Expense
        }
    },
    methods: {
        addExpense() {
            const _this = this
            ExpenseDataService.create(this.expense)
            .then((response: ResponseData) => {
                console.log(response)
                _this.$router.push('/')
            })
        }
    }
})
</script>
<style scoped>
.input-group {
    margin-top: 10px;
    display: grid;
    align-content: center;
}
</style>