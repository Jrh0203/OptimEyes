import axios from "axios";

export default {
    GetBooksList: function(data) {
        return axios.post("/api/store", data);
    },
    GetBooksContent: function(id) {
        return axios.get("/api/getbookcontent/"+ id);
        // id will be objects[0]["properties"]["enaio:objectId"]
    },
    SaveBookStatus: function(data) {
        return axios.post("/api/bookstatus", data);
    },
    GetBookStatus: function(id) {
        return axios.get("/api/bookstatus/" + id);
    },
    // put in get metadata api call with req.params.id
    GetBookMetaData: function(id) {
        return axios.get("/api/getMetadata/" + id)
    }
}