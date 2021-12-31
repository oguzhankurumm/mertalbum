import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './style';

const ProductDetails = ({ navigation }) => {
    const routes = useRoute();
    const { item } = routes.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Hello from product details</Text>
            </View>
        </View>
    );
}

export default ProductDetails;