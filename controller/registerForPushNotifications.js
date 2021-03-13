//registerForPushNotifications.js
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import config from "./config.json";
const baseUrl = config.app.url + config.app.userEndPoint;

const registerForPushNotifications = async (deviceId) => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    alert('No notification permissions!');
    return;
  }
  // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  const userId = config.app.userPrefix + deviceId;
  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return fetch(baseUrl + "/" + userId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      }
    }),
  });
}
export default registerForPushNotifications;