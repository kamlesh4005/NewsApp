import config from "./../config.json";
import Axios from 'axios';
const baseUrl = config.app.url + config.app.userEndPoint;

const getSetUserData = async (deviceId, readData) => {
    const userId = config.app.userPrefix + deviceId;
    Axios.put(baseUrl+"/"+userId, {
        readData: readData
    });
}

export default getSetUserData;