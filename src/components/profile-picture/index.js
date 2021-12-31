import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import { lightGray } from '../../assets/styles/colors';
import styles from './style';

const ProfilePicture = ({ name, image, onImagePress, onEditPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onImagePress}>
                <Image style={styles.image} source={{ uri: image }} />
            </Pressable>
            <Text style={styles.name}>{name}</Text>
            <Pressable onPress={onEditPress} style={styles.linkContainer}>
                <Text style={styles.link}>Profili Düzenle</Text>
                <Icon name="edit-2-outline" width={16} height={16} fill={lightGray} />
            </Pressable>
        </View>
    )
}

export default ProfilePicture;