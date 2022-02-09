import React from 'react';
import { View, Text, ScrollView, Image, Linking, Alert } from 'react-native';
import styles from './style';
import { useRoute } from '@react-navigation/native';
import BottomButton from '../../components/common/bottom-button';

const CampaignDetails = () => {
    const routes = useRoute();
    const { campaign } = routes.params;

    const onPress = () => {
        const link = 'https://www.mertalbum.com'

        Linking.canOpenURL(link)
            .then(supported => {
                if (supported) {
                    Linking.openURL(link);
                } else {
                    Alert.alert('Uyarı', 'Link açılırken bir sorun oluştu.');
                }
            })
            .catch(err => Alert.alert('Uyarı', 'Link açılırken bir sorun oluştu.'));
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 30 }}
            >
                <Image
                    source={{ uri: campaign.image }}
                    style={styles.image}
                />
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{campaign.title}</Text>
                    <Text style={styles.description}>{String(campaign.description).replaceAll("\\n", "\n")}</Text>
                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                <BottomButton title="Web Siteye Git" onPress={onPress} />
            </View>
        </View>
    )
}

export default CampaignDetails;