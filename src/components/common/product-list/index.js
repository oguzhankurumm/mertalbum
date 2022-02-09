import React, { useRef } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import MasonryList from '@react-native-seoul/masonry-list';
import { primary } from '../../../assets/styles/colors';
import styles from './style';

const ProductList = ({ data, title }) => {
    const navigation = useNavigation();
    const listRef = useRef(null);

    const onProductClick = item => {
        navigation.navigate('CategorieDetails', { title: item.title, data: item.subProducts });
    }

    const renderItem = ({ item }) => (
        <Pressable key={Math.random()} onPress={() => onProductClick(item)}>
            <ImageBackground
                style={styles.container}
                imageStyle={styles.image}
                source={{ uri: item.image }}
            >
                <View style={styles.bottomContainer}>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    )

    return (
        <View key={Math.random()}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.rightContainer}>
                    <Text style={styles.headerRightTitle}>{data.length} Kategori</Text>
                    <Icon name='grid-outline' width={20} height={20} fill={primary} />
                </View>
            </View>
            <MasonryList
                key={Math.random() * 12}
                innerRef={listRef}
                style={{ alignSelf: 'stretch' }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    paddingBottom: 30,
                    alignSelf: 'stretch'
                }}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.1}
                numColumns={2}
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ProductList;