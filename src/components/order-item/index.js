import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import { lightGray, primary } from '../../assets/styles/colors';
import moment from 'moment';
import 'moment/locale/tr';
import styles from './style';

const OrderItem = ({ title, date, status, paymentType, amount, number, onPress, currenySymbol }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.leftContainer}>
                <Icon name="checkmark-circle-2-outline" width={48} height={48} fill={primary} />
                <View style={styles.secondContainer}>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.title}>#{title}</Text>
                    </View>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.subtitle}>{status}</Text>
                    </View>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.subtitle}>{number} ürün</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightContainer}>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.status}>{parseFloat(amount).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currenySymbol}</Text>
                </View>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.subtitle}>Ödeme Türü: {paymentType}</Text>
                </View>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.subtitle}>{moment(date).format('lll')}</Text>
                </View>
            </View>

        </Pressable>
    )
}

export default OrderItem;