import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import config from "./../config.json";
import Axios from 'axios';
const baseUrl = config.app.url + config.app.userEndPoint;


const getSetUserData = async (deviceId) => {
    const userId = config.app.userPrefix + deviceId;
    return Axios.get(baseUrl + "/" + userId).then(async function(res){
        if(!res || res.status != 200 || !res.data){
            // Add User and its expo token here
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                alert('No notification permissions!');
                return;
            }
            // Get the token that identifies this device
            let token = await Notifications.getExpoPushTokenAsync();
            return addUser({uId: userId, nToken: token});
        }
        else {
            return res.data;
        }
    }).catch(
        (err) => console.log('Error while fetching user data ( Get Users ) - ', err)
    )
}

const addUser = async(userData) => {
    var addedUserData = await Axios.post(baseUrl+"/", userData);
    let newUserData = {};
    if(addedUserData && addedUserData.data && addedUserData.data.length){
        return addedUserData.data[0];
    }
    return newUserData;
}

export default getSetUserData;