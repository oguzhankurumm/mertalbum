import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CampaignCard from '../../components/common/campaign-card';
import styles from './style';

const Campaigns = ({ navigation }) => {
    const campaignData = useSelector(state => state.homeReducer.campaigns);


    return (
        <View style={styles.container}>
            <FlatList
                data={campaignData}
                keyExtractor={item => item.id}
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 30, paddingTop: 3 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return <CampaignCard navigation={navigation} key={index} item={item} />
                }}
            />
        </View>
    )
}

export default Campaigns;