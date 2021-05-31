<template>
    <div class="container">
        <div class="flex-row align-items-center justify-content-between">
            <h2 class="title">Lista de amigos</h2>
            <button class="submit-button"><router-link to="/friends/add">Añadir amigos</router-link></button>
        </div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
            <tr v-for="(friend, index) in friends" :key="index">
                <td>{{ friend.firstname }}</td>
                <td>{{ friend.lastname }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Friend from '@/types/Friend'
import FriendsDataService from '@/services/FriendsDataService'
import ResponseData from '@/types/ResponseData'



export default defineComponent({
  name: 'Friends',
  data() {
      return {
          friends: [] as Friend[]
      }
  },
  methods: {
      getFriends() {
          FriendsDataService.getAll()
          .then((response: ResponseData) => {
              this.friends = response.data
          }).catch((e: Error) => {
              console.log(e)
          })
      }
  },
  created() {
      this.getFriends()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
    line-height: 2em;
}
</style>
