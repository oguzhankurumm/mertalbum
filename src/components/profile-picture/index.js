import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style';

const ProfilePicture = ({ name, username }) => {
    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/avatar.jpeg')} />
            <Text style={styles.name}>{titleCase(name)}</Text>
            {String(username) !== "0" &&
                <Text style={styles.link}>{username}</Text>
            }
        </View>
    )
}

export default ProfilePicture;