import axios from "axios";

export default {
    GetBooksList: function(data) {
        return axios.post("/api/store", data);
    },
    GetBooksContent: function(id) {
        return axios.get("/api/getbookcontent/"+ id);
        // id will be objects[0]["properties"]["enaio:objectId"]
    },
}