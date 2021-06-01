<template>
  <div id="app">
    <ul class="horizontal" @click="url">
      <li style="margin-left: 10%"><router-link to="/" :class="{ active: url('/') }">Expenses</router-link></li>
      <li><router-link to="/expenses/balance" :class="{ active: url('/expenses/balance') }">Balance</router-link></li>
      <li><router-link to="/expenses/debts" :class="{ active: url('/expenses/debts') }">Debts</router-link></li>
      <li><router-link to="/friends" :class="{ active: url('/friends') }">Friend list</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    url(path: string) {
      return this.$route.path === path
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
ul.horizontal li {
    float: left;
}
ul.horizontal li a.active {
    background-color: #04AA6D;
}
ul.horizontal li a.active:hover {
    background-color: #0b9260;
}
ul.horizontal li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
ul.horizontal li a:hover {
  background-color: #000;
}
.container {  
  max-width: 80%;  
  margin: auto;
}
.text-center {
  text-align: center !important;
}
input {
    height: 25px;
    padding: 1px 2px 0 5px !important;
    font: inherit;
}
select {
    height: 25px;
    padding: 1px 2px 0 5px !important;
    font: inherit;
}
textarea {
    font: inherit;
    padding: 5px 2px 0px 5px !important;
}
.justify-content-center{
  justify-content: center;
}
.justify-content-between{
  justify-content: space-between;
}
.align-items-center{
  align-items: center !important;
}
.back-button {
    border: 1px solid;
    cursor: pointer;
    font-size: 1em;
    border-radius: 4px;
    width: auto;
    height: 3em;
    min-width: 180px;
    color: #fff;
    background-color: #c7c7c7;
    border-color: #c7c7c7;
}
.back-button a {
    text-decoration: none;
    color: #fff;
}
.submit-button a {
    text-decoration: none;
    color: #fff;
}
.submit-button {
    border: 1px solid;
    cursor: pointer;
    font-size: 1em;
    border-radius: 4px;
    width: auto;
    height: 3em;
    min-width: 180px;
    color: #fff;
    background-color: #18bd5b;
    border-color: #18bd5b;
}
.title {
    text-align: left;
    margin-left: 15px;
}
.input-group {
    display: inline-grid;
    flex: 1 1 100%;
    vertical-align: top;
    margin-left: 15px;
}
.input-label {
    font-size: 1em;
    margin-bottom: 6px;
    margin-left: 2px;
    display: block;
    text-align: left;
}
.flex-row {
    display: flex;
    margin-top: 15px;
}
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
