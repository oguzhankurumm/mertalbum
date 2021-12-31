import React from 'react'
import { View, Text } from 'react-native'
import styles from './style';

const ListTitle = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
    )
}

export default ListTitle;