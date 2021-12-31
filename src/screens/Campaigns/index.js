import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Campaigns = ({ navigation }) => {

    const goCampaignDetail = () => navigation.navigate('CampaignDetail');

    return (
        <View>
            <Text>Hello from campaigns</Text>
        </View>
    )
}

export default Campaigns;