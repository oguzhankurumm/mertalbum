import React from 'react'
import { View, Text, Pressable, Image } from 'react-native';
import styles from './style';
import { Icon } from 'react-native-eva-icons';
import { primary } from '../../../assets/styles/colors';

const CampaignCard = ({ item, navigation }) => {

    const goCampaignDetail = campaign => {
        navigation.navigate('CampaignDetails', { campaign: campaign });
    };

    return (
        <Pressable
            style={styles.cardContainer}
            onPress={() => goCampaignDetail(item)}
        >
            <Image style={styles.imageContainer} source={{ uri: item.image }} />
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.rightButton}>
                    <Icon name="chevron-right-outline" width={28} height={28} fill={primary} />
                </View>
            </View>
        </Pressable>
    )
}

export default CampaignCard;