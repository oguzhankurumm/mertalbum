import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import { primary } from '../../assets/styles/colors';
import moment from 'moment';
import 'moment/locale/tr';
import styles from './style';

const OrderItem = ({ data, title, date, status, paymentType, amount, onPress, currenySymbol }) => {
    const statuses = [
        { "id": "1", "name": "Kontrol" },
        { "id": "2", "name": "Photoshop" },
        { "id": "3", "name": "Baskıda" },
        { "id": "4", "name": "Imalatda" },
        { "id": "5", "name": "Kapak" },
        { "id": "6", "name": "Blok" },
        { "id": "7", "name": "Montaj" },
        { "id": "8", "name": "Paket" },
        { "id": "9", "name": "Kargo" },
        { "id": "10", "name": "Tamamlandı" },
        { "id": "11", "name": "Lazer" }
    ]

    const renderStatus = () => {
        const filterStatus = statuses.find(item => item.id === String(status));
        return filterStatus ? filterStatus.name : null;
    }

    const collectionData = data.kapakyazi !== undefined ? data.kapakyazi : [];

    const sumArrayValue = (array) => {
        if (array.length === 0 || array === undefined) {
            return 1;
        } else {
            let sum = Object.values(array).reduce(function (prev, current) {
                return prev + +parseFloat(current.adet !== undefined ? current.adet : 0)
            }, 0);
            return sum;
        }
    }

    return (
        <Pressable
            style={styles.container}
            onPress={() => onPress(data)}
        >
            <View style={styles.leftContainer}>
                <Icon name="checkmark-circle-2-outline" width={48} height={48} fill={primary} />
                <View style={styles.secondContainer}>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.title}>#{title}</Text>
                    </View>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.subtitle}>{renderStatus()}</Text>
                    </View>
                    <View style={styles.left}>
                        <Text numberOfLines={1} style={styles.subtitle}>{collectionData?.product !== undefined && Object.values(collectionData.product).length !== 0 ? Object.values(collectionData.product).length : 1} ürün, ({collectionData.product !== undefined && Object.values(collectionData.product).length !== 0 ? sumArrayValue(collectionData.product) : 1}) ad.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightContainer}>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.status}>{parseFloat(amount).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currenySymbol}</Text>
                </View>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.subtitle}>{paymentType}</Text>
                </View>
                <View style={styles.right}>
                    <Text numberOfLines={1} style={styles.subtitle}>{moment(date).format('lll')}</Text>
                </View>
            </View>

        </Pressable>
    )
}

export default OrderItem;