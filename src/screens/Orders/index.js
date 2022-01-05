import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item';
import OrdersHeader from '../../components/orders-header';
import styles from './style';

const Orders = ({ navigation }) => {
    const orderData = useSelector(state => state.ordersReducer.orders);
    const [selectedHeader, setSelectedHeader] = useState(0);
    const HeaderData = [
        { id: 0, title: 'Tümü' },
        { id: 1, title: 'Tamamlanan' },
        { id: 2, title: 'İade' },
        { id: 3, title: 'İptal' }
    ];

    const onFilterChange = (id) => {
        setSelectedHeader(id);
    }

    const navigateToDetails = item => navigation.navigate('OrderDetails', { item });

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 10 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => <OrdersHeader data={HeaderData} setSelectedHeader={onFilterChange} selectedHeader={selectedHeader} />}
                ListHeaderComponentStyle={{ paddingBottom: 10 }}
                data={orderData}
                renderItem={({ item, index }) => {
                    return (
                        <OrderItem
                            key={index}
                            title={item.id}
                            date={item.created_at}
                            status={item.orderstatus === 1 ? 'Tamamlandı' : 'İptal'}
                            number={item.orderparti}
                            amount={item.grandtotal}
                            currenySymbol={item.parasimge}
                            paymentType={item.payments_type}
                            onPress={navigateToDetails}
                        />
                    )
                }}


            />
        </SafeAreaView>

    )
}

export default Orders;