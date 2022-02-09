import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { primary } from '../../../assets/styles/colors';
import styles from './style';

const AddressCard = ({ title, address, data, navigation, type }) => {

    const onClick = () => {
        navigation.navigate('AddressDetails', { title, data, type });
    }
    return (
        <Pressable onPress={onClick} style={styles.container}>
            <Icon name="pin-outline" width={28} height={28} fill={primary} />
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{address}</Text>
            </View>
        </Pressable>
    );
};

export default AddressCard;