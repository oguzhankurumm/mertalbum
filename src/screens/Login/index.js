import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';

const Login = ({ navigation }) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingVertical: 30 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <Text>Hello from login page</Text>
        </ScrollView>
    )
}

export default Login;