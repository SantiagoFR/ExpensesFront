<template>
    <div class="container">
        <h2 class="title">Add new friend</h2>
        <div class="flex-row">
            <div class="input-group">
                <label class="input-label" for="firstname">First name</label>
                <input 
                    type="text"
                    required
                    v-model="friend.firstname"
                    name="firstname"
                    id="firstname"
                    class="form-input"
                >
            </div>
            <div class="input-group">
                <label class="input-label" for="lastname">Last name</label>
                <input
                    type="text"
                    required
                    v-model="friend.lastname"
                    name="lastname"
                    id="lastname"
                    class="form-input"
                >
            </div>
        </div>

        <div class="flex-row justify-content-center">
            <button class="back-button" @click="$router.back">Back</button>
            <button style="margin-left: 5px" class="submit-button" @click="addFriend">Add friend</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Friend from '@/types/Friend'
import FriendsDataService from '@/services/FriendsDataService'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: "add-friend",
    data() {
        return {
            friend: {
                id: null,
                firstname: "",
                lastname: "",
            } as Friend
        }
    },
    methods: {
        addFriend() {
            const _this = this
            FriendsDataService.create(this.friend)
            .then((response: ResponseData) => {
                console.log(response)
                _this.$router.push('/friends')
            })
        }
    }
})
</script>