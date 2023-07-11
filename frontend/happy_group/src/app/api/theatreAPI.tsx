import { apiV1, get, post } from "./generic";


const theatreAPI = {
    getAllTheatres : function () {
        const url = `${apiV1}/theatres/`;
        return get(url, "")
    }
}

export default theatreAPI;