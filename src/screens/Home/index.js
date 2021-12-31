import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello from home</Text>
        </View>
    )
}

export default Home;