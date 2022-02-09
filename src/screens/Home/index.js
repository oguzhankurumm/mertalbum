import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { messaging } from '../../config/config';
import Slider from '../../components/common/slider';
import ProductList from '../../components/common/product-list';
import styles from './style';

const Home = () => {
    const products = useSelector(state => state.homeReducer.products);
    const sliders = useSelector(state => state.homeReducer.sliders);

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('enabled:', enabled);
        }

    }

    useEffect(() => {
        requestUserPermission();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={[0]}
                keyExtractor={index => index.toString()}
                style={styles.container}
                scrollEnabled={true}
                ListHeaderComponent={() => <Slider sliders={sliders} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                ListHeaderComponentStyle={{ marginTop: 5 }}
                renderItem={({ index }) => (
                    <View key={index} >
                        <ProductList data={products} title="Kategoriler" />
                    </View>
                )}
            />
        </View>
    )
}

export default Home;