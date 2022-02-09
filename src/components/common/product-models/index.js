import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

const ProductModels = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

export default ProductModels;