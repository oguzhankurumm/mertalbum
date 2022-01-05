import React, { useRef } from 'react';
import { View, Text, ImageBackground, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import MasonryList from '@react-native-seoul/masonry-list';
import { primary } from '../../../assets/styles/colors';
import styles from './style';

const ProductList = ({ data, title }) => {
    const navigation = useNavigation();
    const listRef = useRef(null);

    const onSeeAllClick = () => {
        navigation.navigate('ProductList', { title, data });
    }

    const onProductClick = item => {
        console.log({ item })
        navigation.navigate('ProductDetails', { title: item.name, item });
    }

    const renderItem = ({ item, index }) => (
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

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Pressable onPress={onSeeAllClick} style={styles.rightContainer}>
                    <Text style={styles.headerRightTitle}>Tümü</Text>
                    <Icon name='chevron-right' width={24} height={24} fill={primary} />
                </Pressable>
            </View>
            <MasonryList
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
                data={data.slice(0, 6)}
                renderItem={renderItem}
            />
        </>
    )
}

export default ProductList;