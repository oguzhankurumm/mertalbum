import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, ImageBackground, Pressable } from 'react-native';
import styles from './style';

const CategoryDetails = ({ navigation }) => {
    const routes = useRoute();
    const { data } = routes.params;

    const onCategoryPress = item => {
        navigation.navigate('ProductDetails', { product: item });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.title}
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 30, paddingTop: 3 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Pressable key={item.title} onPress={() => onCategoryPress(item)}>
                        <ImageBackground
                            key={index}
                            style={styles.imageContainer}
                            imageStyle={styles.imageStyle}
                            source={{ uri: item.image }}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default CategoryDetails;