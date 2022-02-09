import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import styles from './style';

const OrdersHeader = ({ data, selectedHeader, setSelectedHeader }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
            onPress={setSelectedHeader}
        >
            <View style={styles.container}>
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
        </ScrollView>
    )
}

export default OrdersHeader;