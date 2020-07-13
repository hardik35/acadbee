<template>
    <div>
        <h3> Notable Members: </h3>
        <ul
            v-for="character in houseCharacterDetails.slice(0, 5)"
            :key="character._id">
            <li> {{ character.name }} </li>
        </ul>
        <el-select 
            v-model="selectedCharacters" 
            multiple 
            value-key="_id"
            placeholder="Select Users">
            <el-option
                v-for="character in houseCharacterDetails"
                :key="character._id"
                :label="character.name"
                :value="character"
                :popper-append-to-body="false">
            </el-option>
        </el-select>
        <br>
        <el-button 
            type="primary" 
            round
            @click="addUsers()">
            Add User(s)
        </el-button>
        <h3> Added users grouped by blood status </h3>
        <div
            v-for="(usersWithBloodStatus, bloodStatus, index) in addedUsers"
            :key="index">
            <h1> {{bloodStatus}} </h1>
            <ul>
                <li
                    v-for="(userDetail, index) in usersWithBloodStatus"
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
                if (this.addedUsers[this.selectedCharacters[i].bloodStatus] === undefined) {
                    this.$set(this.addedUsers, this.selectedCharacters[i].bloodStatus, [this.selectedCharacters[i]]);
                }
                else {
                    this.addedUsers[this.selectedCharacters[i].bloodStatus].push(this.selectedCharacters[i]);
                }
            }
        }
    }
}
</script>

<style>

</style>