import axios from "axios";

// Making API call to get filler information for employees
export default {
    search: function () {
        return axios.get("https://randomuser.me/api/?results=20")
    }
};