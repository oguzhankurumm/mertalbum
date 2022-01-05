import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Language = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello from change language page</Text>
        </View>
    )
}

export default Language;