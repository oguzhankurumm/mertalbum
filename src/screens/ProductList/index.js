import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './style';

const ProductList = ({ navigation }) => {
    const routes = useRoute();
    const { data } = routes.params;
    const listRef = useRef(null);

    return (
        <View style={styles.container}>

        </View>
    )
}

export default ProductList;