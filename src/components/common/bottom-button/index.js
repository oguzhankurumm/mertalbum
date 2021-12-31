import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { white } from '../../../assets/styles/colors';
import styles from './style';

const BottomButton = ({ onPress, title, style, Loading, disabled }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={disabled !== undefined ? disabled : false}
            onPress={onPress}
            style={{
                ...styles.button,
                ...style
            }}>
            {Loading === true ?
                <ActivityIndicator size="small" animating={true} color={white} />
                :
                <Text allowFontScaling={false} style={styles.title}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default BottomButton;