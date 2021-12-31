import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import OrderItem from '../../components/order-item';
import orderData from '../../dummy/order.json';
import styles from './style';

const Orders = ({ navigation }) => {
    const navigateToDetails = () => navigation.navigate('OrderDetails');

    console.log('ord:', orderData)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 10 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                keyExtractor={(item, index) => index.toString()}
                data={orderData}
                renderItem={({ item, index }) => {
                    console.log('item:', item)
                    return (
                        <OrderItem
                            title={item.id}
                            subtitle={item.tamamlanmatarihi}
                            icon="cube-outline"
                            onPress={navigateToDetails}
                        />
                    )
                }}


            />
        </SafeAreaView>

    )
}

export default Orders;