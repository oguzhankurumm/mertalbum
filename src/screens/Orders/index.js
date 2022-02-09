import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item';
import OrdersHeader from '../../components/orders-header';
import styles from './style';

const Orders = ({ navigation }) => {
    const defaultAllOrders = useSelector(state => state.ordersReducer.allOrders);
    const defaultOrders = useSelector(state => state.ordersReducer.orders);
    const [orderData, setOrderData] = useState(defaultAllOrders);
    const [selectedHeader, setSelectedHeader] = useState(0);
    const HeaderData = [
        { id: 0, title: 'Tümü', value: 'all' },
        { id: 1, title: 'Aktif', value: 'aktifSiparisler' },
        { id: 2, title: 'Dosya Bekleyen', value: 'dosyaBekleyen' },
        { id: 3, title: 'İptal Edilen', value: 'iptaledilen' }
    ];

    const onFilterChange = id => {
        setSelectedHeader(id);
        switch (id) {
            case 0:
                setOrderData(defaultAllOrders);
                break;
            case 1:
                setOrderData(defaultOrders.aktifSiparisler);
                break;
            case 2:
                setOrderData(defaultOrders.dosyaBekleyen);
                break;
            case 3:
                setOrderData(defaultOrders.iptaledilen);
                break;
            default:
                break;
        }
    }

    const navigateToDetails = item => {
        navigation.navigate('OrderDetails', { item, title: String(`#${item.id}`) });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={orderData.sort((a, b) => b.tarih.localeCompare(a.tarih))}
                contentContainerStyle={{ paddingBottom: 10 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => <OrdersHeader data={HeaderData} setSelectedHeader={onFilterChange} selectedHeader={selectedHeader} />}
                ListHeaderComponentStyle={{ paddingBottom: 10 }}
                ListEmptyComponent={() => <View style={styles.emptyContainer}><Text style={styles.emptyText}>Bu kategoride herhangi bir sipariş bulunamadı.</Text></View>}
                renderItem={({ item }) => (
                    <OrderItem
                        data={item}
                        key={item.id}
                        title={item.id}
                        date={item.tarih}
                        status={item.stage_id}
                        amount={item.tutar}
                        currenySymbol={item.simge}
                        paymentType={item.odemeturu}
                        onPress={navigateToDetails}
                    />
                )}
            />
        </SafeAreaView>

    )
}

export default Orders;