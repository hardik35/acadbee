import axios from 'axios';
import { harryPotterAPIKey } from '@/constants.js';

export default {
    FETCH_HOUSES_DETAILS() {
        return axios.get(`/houses?key=${harryPotterAPIKey}`)
    }
}