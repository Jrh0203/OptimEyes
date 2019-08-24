import axios from "axios";


export default {
    GetBooksList: function(data) {
        return axios.post("/api/store", data);
    },
    GetBooksContent: function(id) {
        return axios.get("/api/getbookcontent/"+ id);
    },
    HelloWorld: function() {
        return axios.get("/api/helloworld");
    }
}