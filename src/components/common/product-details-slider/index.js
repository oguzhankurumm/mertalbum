import React, { useRef, useState } from 'react'
import { View, Pressable, Alert, Image } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles from './style';

const ProductDetailsSlider = ({ sliders }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carousel = useRef(null);


    const renderItem = ({ item, index }) => (
        <View key={index} style={styles.renderItem}>
            <Image
                source={{ uri: item }}
                style={styles.image}
            />
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Carousel
                    ref={carousel}
                    layout="default"
                    data={sliders}
                    renderItem={renderItem}
                    sliderWidth={400}
                    itemWidth={400}
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

export default ProductDetailsSlider;