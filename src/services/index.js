import axios from 'axios';
import houses from './houses';
import characters from './characters';

export default {
    houses,
    characters,
    SET_AXIOS_BASE_URL() {
        axios.defaults.baseURL = 'https://www.potterapi.com/v1/';
    },
}