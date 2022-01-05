import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style';

const OrdersHeader = ({ data, selectedHeader, setSelectedHeader }) => {
    return (
        <View style={styles.container} onPress={setSelectedHeader}>
            {data.map((item, index) => {
                return (
                    <Pressable
                        key={index}
                        style={item.id === selectedHeader ? styles.buttonSelected : styles.buttonDefault}
                        onPress={() => setSelectedHeader(item.id)}
                    >
                        <Text numberOfLines={1} style={item.id === selectedHeader ? styles.titleSelected : styles.title}>{item.title}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default OrdersHeader;