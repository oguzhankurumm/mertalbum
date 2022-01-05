import React from 'react';
import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../components/common/slider';
import ProductList from '../../components/common/product-list';
import { getOrders } from '../../redux/actions/orders';
import categories from '../../dummy/categories';
import sliderData from '../../dummy/slider';
import styles from './style';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.authReducer.currentUser);

    useEffect(() => {
        dispatch(getOrders(profileData.token));
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={[0]}
                keyExtractor={index => index.toString()}
                style={styles.container}
                scrollEnabled={true}
                ListHeaderComponent={() => <Slider sliders={sliderData} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                ListHeaderComponentStyle={{ backgroundColor: '#f1f1f1', borderRadius: 12 }}
                renderItem={() => (
                    <View>
                        <ProductList data={categories} title="Kategoriler" />
                    </View>
                )}
            />
        </View>
    )
}

export default Home;