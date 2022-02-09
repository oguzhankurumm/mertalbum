/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";


PushNotification.configure({
    onRegister: (token) => {
        console.log('ON REGISTER', token)
    },
    onNotification: function (notification) {
        // console.log('notification: ', notification)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onRegistrationError: function (err) {
          console.log(err.message, err);
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true
});
PushNotification.createChannel(
    {
        channelId: 'fcm_fallback_notification_channel', // (required)
        channelName: 'Channel', // (required)
    },
    (created) => console.log(`createChannel returned '${created}`),
)

AppRegistry.registerComponent(appName, () => App);