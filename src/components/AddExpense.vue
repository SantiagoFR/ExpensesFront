<template>
    <div class="container">
        <h2 class="title">Añadir nuevo gasto</h2>
        <div class="flex-row">
            <div class="input-group">
                <label class="input-label" for="author">Author</label>
                <select name="author" v-model="expense.author" id="author">
                    <option v-for="(friend, index) in friends" :key="index" :value="friend.fullName">{{ friend.fullName }}</option>
                </select>
            </div>
        </div>
        <div class="flex-row">
            <div class="input-group">
                <label class="input-label" for="amount">Amount</label>
                <input 
                    type="number"
                    required
                    v-model="expense.amount"
                    name="amount"
                    id="amount"
                    class="form-input"
                >
            </div>
            <div class="input-group">
                <label class="input-label" for="date">Date</label>
                <input
                    type="date"
                    required
                    v-model="expense.date"
                    name="date"
                    id="date"
                    class="form-input"
                >
            </div>
        </div>
        <div class="flex-row">
            <div class="input-group">
                <label class="input-label" for="description">Description</label>
                <textarea name="description" id="description" required v-model="expense.description" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div class="flex-row justify-content-center">
            <button class="back-button" @click="$router.back">Volver</button>
            <button style="margin-left: 5px" class="submit-button" @click="addExpense">Enviar gasto</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Expense from '@/types/Expense'
import ExpenseDataService from '@/services/ExpensesDataService'
import ResponseData from '@/types/ResponseData'
import FriendsDataService from '../services/FriendsDataService'
import Friend from '../types/Friend'

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
            } as Expense,
            friends: [] as Friend[]
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
        },
    },
    created() {
        FriendsDataService.getAll()
        .then((response: ResponseData) => {
            this.friends = response.data
        }).catch((e: Error) => {
            console.log(e)
        })
    }
})
</script>
<style scoped>

</style>