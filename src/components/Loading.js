import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native-paper';

const { width, height } = Dimensions.get("window");

const Loading = () => {
    return (
        <ImageBackground
            source={require('../assets/images/loading_bg.jpeg')}
            style={{ width, height, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 }}>
            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.2 }}
                colors={['rgba(0,0,0,0.9)', 'transparent']}
                style={{
                    position: 'absolute',
                    width,
                    height
                }}
            />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size="large" animating={true} color={"#FFF"} />
            </View >
        </ImageBackground>
    );
}

export default Loading;