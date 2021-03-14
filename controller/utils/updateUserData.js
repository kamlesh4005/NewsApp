import config from "../config.json";
import Axios from 'axios';
const baseUrl = config.app.url + config.app.userEndPoint;

const updateUserData = async (deviceId, updateSet) => {
    const userId = config.app.userPrefix + deviceId;
    Axios.put(baseUrl+"/"+userId, updateSet);
}

export default updateUserData;