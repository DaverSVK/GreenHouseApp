import axios from "axios";

const URL = "https://fathomless-dusk-03713.herokuapp.com/servitka"
const URL2 = "https://greenhouseapp-a928f-default-rtdb.firebaseio.com/data.json"

  
  export async function getLogSample () {
    const response = await axios.get(URL2);

    const data = [];

    console.log(response.data)
    for(const key in response.data){
      const dataObj = {
        id: key,
        date: response.data[key].date,
        temperature: response.data[key].temperature,
        humidity: response.data[key].humidity,
        water: response.data[key].water,
        water2: response.data[key].water2,
        water3: response.data[key].water3,
        water4: response.data[key].water4
    };
    data.push(dataObj);
  }

    return data;
}
// class Controller{
//   getLogSampleById = (id) => {
//     return axios.get(URL2+id);
//   }

//   createLogSample = (jsonObject) => {
//     axios.post(URL2, jsonObject);
//   }
//   deleteLogSample = (id) => {
//     axios.delete(URL2+'/'+id);
//   }
// }

// export default new Controller();