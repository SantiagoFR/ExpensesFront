<template>
    <div class="container">
        <div class="input-group">
            <label for="firstname">First name</label>
            <input 
                type="text"
                required
                v-model="person.firstname"
                name="firstname"
                id="firstname"
            >
        </div>
        <div class="input-group">
            <label for="lastname">Last name</label>
            <input 
                type="text"
                required
                v-model="person.lastname"
                name="lastname"
                id="lastname"
            >
        </div>

        <button type="submit" @click="addPerson">Añadir amigo</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Person from '@/types/Person'
import PersonDataService from '@/services/PersonDataService'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: "add-person",
    data() {
        return {
            person: {
                id: null,
                firstname: "",
                lastname: "",
            } as Person
        }
    },
    methods: {
        addPerson() {
            const _this = this
            PersonDataService.create(this.person)
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