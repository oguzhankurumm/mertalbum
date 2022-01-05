import React from 'react';
import { View, Text, ScrollView, ImageBackground, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import { primary } from '../../../assets/styles/colors';
import styles from './style';

const SliderCarousel = ({ data, title }) => {
    const navigation = useNavigation();

    const onSeeAllClick = () => {
        navigation.navigate('CategoryDetails', { title, data });
    }

    const onProductClick = item => {
        console.log('item:', item);
    }

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Pressable onPress={onSeeAllClick} style={styles.rightContainer}>
                    <Text style={styles.headerRightTitle}>Tümü</Text>
                    <Icon name='chevron-right' width={24} height={24} fill={primary} />
                </Pressable>
            </View>
            <ScrollView
                style={styles.scrollContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 10 }}
            >
                {data.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={() => onProductClick(item)}>
                            <ImageBackground
                                style={styles.container}
                                imageStyle={styles.image}
                                source={{ uri: item.image }}
                            >
                                <View style={styles.bottomContainer}>
                                    <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </Pressable>
                    )
                })}
            </ScrollView>
        </>

    )
}

export default SliderCarousel;