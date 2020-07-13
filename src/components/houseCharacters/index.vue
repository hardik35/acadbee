<template>
    <div>
        <!-- <div>{{ housesDetails }} </div> -->
        <el-tabs 
            v-model="activeHouseId"
            @tab-click="onTabClick">
            <el-tab-pane 
                v-for="houseDetail in housesDetails"
                :key="houseDetail._id"
                :label="houseDetail.name"
                :name="houseDetail._id">
                <showHouseDetails   
                    :houseDetail="houseDetail"/>
                <houseCharacters
                    :houseCharacterDetails="houseIdCharacterDetails[houseDetail._id]"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

import API from '@/services/index.js';
import showHouseDetails from './showHouseDetails.vue';
import houseCharacters from './houseCharacters.vue';

export default {
    data() {
        return {
            housesDetails: [],
            activeHouseId: null,
            activeHouseLabel: null,
            houseIdCharacterDetails: {},
        };
    },
    components: {
        showHouseDetails,
        houseCharacters
    },
    methods: {
        async fetchHousesDetails() {
            this.housesDetails = (await API.houses.FETCH_HOUSES_DETAILS()).data;
            this.activeHouseId = this.housesDetails[0]._id;
            this.activeHouseLabel = this.housesDetails[0].name;
        },
        async fetchHouseCharacters() {
            const houseCharacters = (await API.characters.FETCH_HOUSE_CHARACTERS(this.activeHouseLabel)).data;
            this.$set(this.houseIdCharacterDetails, this.activeHouseId, houseCharacters);
        },
        onTabClick(tab) {
            this.activeHouseId = tab.name;
            this.activeHouseLabel = tab.label
        }
    },
    watch: {
        activeHouseId: {
            immediate: false,
            handler(newVal) {
                if (newVal && newVal != 0) {
                    if (this.houseIdCharacterDetails[newVal] === undefined) {
                        this.fetchHouseCharacters();
                    }
                }
            }
        }
    },
    mounted() {
        this.fetchHousesDetails();
    }
}
</script>

<style>

</style>