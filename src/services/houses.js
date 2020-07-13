import axios from 'axios';

export default {
    FETCH_HOUSES_DETAILS() {
        return axios.get(`/houses?key=$2a$10$nNv.zV0OvfY5vimlRnq5z.8ERGv9QKdIiRA5j7t/XpYCzcLHqae0m`)
    }
}