import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import BottomButton from '../../components/common/bottom-button';
import styles from './style';

const Cart = ({ navigation }) => {
    const navigateToCheckout = () => navigation.navigate('Checkout');

    return (
        <SafeAreaView style={styles.container}>
            <BottomButton title="Sepeti Onayla" onPress={navigateToCheckout} />
        </SafeAreaView>
    )
}

export default Cart;