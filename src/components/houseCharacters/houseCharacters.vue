<template>
    <div>
        <h3> Notable Members: </h3>
        <div
            v-if="!areUsersFetching">
            <ul
                v-for="character in selectedHouseCharacterDetails"
                :key="character._id">
                <li> {{ character.name }} </li>
            </ul>
        </div>
        <div 
            v-else>
            Fetching Users Please Wait...
        </div>
        <el-select 
            v-model="selectedCharacters" 
            multiple 
            value-key="_id"
            placeholder="Select Users"
            style="margin: 20px 0">
            <el-option
                v-for="character in houseCharacterDetails"
                :key="character._id"
                :label="`${character.name}(${character.bloodStatus})`"
                :value="character"
                :popper-append-to-body="false">
            </el-option>
        </el-select>
        <br>
        <el-button 
            type="primary" 
            round
            @click="addUsers()"
            :disabled="isAddUserDisabled">
            Add User(s)
        </el-button>
        <h3> Added users grouped by blood status </h3>
        <div
            v-for="(specificUsersBloodStatus, bloodStatus, index) in addedUsers"
            :key="index">
            <h1> {{bloodStatus}} </h1>
            <ul>
                <li
                    v-for="(userDetail, index) in specificUsersBloodStatus"
                    :key="index">
                    {{ userDetail.name }}
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        houseCharacterDetails: {
            type: Array,
            default: () => [],
        },
        limitCharacterDisplayInitial: {
            type: Number,
            default: 5,
        }
    },
    data() {
        return {
            selectedCharacters: [],
            addedUsers: {},
        }
    },
    methods: {
        addUsers() {
            for (let i = 0; i < this.selectedCharacters.length; i++) {
                // map with key as bloodStatus and value as array of users
                if (this.addedUsers[this.selectedCharacters[i].bloodStatus] === undefined) {
                    this.$set(this.addedUsers, this.selectedCharacters[i].bloodStatus, [this.selectedCharacters[i]]);
                }
                else {
                    this.addedUsers[this.selectedCharacters[i].bloodStatus].push(this.selectedCharacters[i]);
                }
            }
            this.selectedCharacters = [];
        }
    },
    computed: {
        selectedHouseCharacterDetails() {
            return this.houseCharacterDetails.slice(0, this.limitCharacterDisplayInitial);
        },
        isAddUserDisabled() {
            return this.selectedCharacters.length === 0;
        },
        areUsersFetching() {
            return this.houseCharacterDetails.length === 0;
        }
    }
}
</script>

<style>

</style>