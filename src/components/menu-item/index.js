import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import { lightGray, primary } from '../../assets/styles/colors';
import styles from './style';

const MenuItem = ({ title, subtitle, icon, onPress, isColored }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                    <Icon name={icon} width={28} height={28} fill={isColored ? primary : "#000"} />
                </View>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={isColored ? styles.titleColored : styles.title}>{title}</Text>
                    {!isColored && <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>
            {!isColored &&
                <View style={styles.rightContainer}>
                    <Icon name="chevron-right-outline" width={32} height={32} fill={lightGray} />
                </View>
            }
        </Pressable>
    )
}

export default MenuItem;