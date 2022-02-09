import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './style';
import { useRoute } from '@react-navigation/native';

const SliderDetails = () => {
    const routes = useRoute();
    const { details } = routes.params;

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: details.image }}
                style={styles.image}
            />
            <View style={styles.subContainer}>
                <Text style={styles.title}>{details.title}</Text>
                <Text style={styles.description}>{details.description}</Text>
            </View>
        </SafeAreaView>
    )
}

export default SliderDetails;