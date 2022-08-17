import axios from "axios";

const URL = "https://fathomless-dusk-03713.herokuapp.com/servitka"

class Controller{
  
  getLogSample = () =>{
    return axios.get(URL);
  }

  getLogSampleById = (id) => {
    return axios.get(URL+id);
  }

  createLogSample = (jsonObject) => {
    axios.post(URL, jsonObject);
  }
  deleteLogSample = (id) => {
    axios.delete(URL+'/'+id);
  }
}

export default new Controller();
