import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
            <Image
                style={{ height: 32, resizeMode: "contain", width: 150 }}
                source={require('../assets/images/logo.png')}
            />
        </View >
    )
}

export default Logo;