import React, { useRef, useState } from 'react'
import { View, Pressable, Image } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Slider = ({ sliders }) => {
    const navigation = useNavigation();
    const [activeSlide, setActiveSlide] = useState(0);
    const carousel = useRef(null);

    const onImagePress = item => {
        navigation.navigate('SliderDetails', { details: item })
    }

    const renderItem = ({ item, index }) => (
        <Pressable
            onPress={() => onImagePress(item)}
            key={index}
            style={styles.renderItem}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
        </Pressable>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Carousel
                    ref={carousel}
                    layout="default"
                    layoutCardOffset={9}
                    data={sliders}
                    renderItem={renderItem}
                    sliderWidth={400}
                    itemWidth={370}
                    onSnapToItem={index => setActiveSlide(index)}
                    maxToRenderPerBatch={1}
                    enableMomentum={true}
                    loop={true}
                    loopClonesPerSide={1}
                    autoplay={true}
                    autoplayInterval={3000}
                />
            </View>
            <Pagination
                dotsLength={sliders.length}
                activeDotIndex={activeSlide}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={styles.paginationContainer}
            />
        </View>
    )
}

export default Slider;