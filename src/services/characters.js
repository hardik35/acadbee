import axios from 'axios';
import { harryPotterAPIKey } from '@/constants.js';

export default {
    FETCH_HOUSE_CHARACTERS(houseName) {
        return axios.get(`/characters?house=${houseName}&key=${harryPotterAPIKey}`)
    }
}