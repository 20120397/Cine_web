import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic"; //

const BannerAPI = {
  
  getAllSlides: function () {
    const url = `${apiV1}/slides/`;
    return get(url, "");
  },



  
}
export default BannerAPI
