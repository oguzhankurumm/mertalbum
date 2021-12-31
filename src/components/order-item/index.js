import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import { lightGray, ultraDark } from '../../assets/styles/colors';
import moment from 'moment';
import 'moment/locale/tr';
import styles from './style';

const OrderItem = ({ title, subtitle, icon, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                    <Icon name={icon} width={32} height={32} fill={ultraDark} />
                </View>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text numberOfLines={1} style={styles.subtitle}>{moment(subtitle, 'YYYY-MM-DD').format('LL')}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Icon name="chevron-right-outline" width={32} height={32} fill={lightGray} />
            </View>
        </Pressable>
    )
}

export default OrderItem;