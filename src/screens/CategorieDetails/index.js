import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './style';

const CategoryDetails = ({ navigation }) => {
    const routes = useRoute();
    const { data } = routes.params;

    return (
        <View style={styles.container}>
          
        </View>
    )
}

export default CategoryDetails;