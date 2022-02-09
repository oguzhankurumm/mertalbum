import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Dimensions } from 'react-native';
import styles from './style';
import { Icon } from 'react-native-eva-icons';
import Modal from 'react-native-modal';
import { primary, ultraDark } from '../../assets/styles/colors';
import { CheckBox } from 'native-base';

const LanguageModal = ({ visible, onBackButtonPress, onBackdropPress, close }) => {
    const { width, height } = Dimensions.get('window');
    const [Languages, setLanguages] = useState([
        { name: 'Türkçe', selected: true },
        { name: 'English', selected: false },
    ])

    const changeLanguage = name => {
        const newLanguages = Languages.map(language => {
            if (language.name === name) {
                language.selected = true;
            } else {
                language.selected = false;
            }
            return language;
        })
        setLanguages(newLanguages);
    }

    return (
        <Modal
            isVisible={visible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropColor="#000"
            backdropOpacity={0.3}
            onBackButtonPress={onBackButtonPress}
            onBackdropPress={onBackdropPress}
            style={{
                justifyContent: 'flex-end',
                margin: 0,
                width,
                height
            }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Pressable
                        onPress={close}
                        style={styles.closeButton}
                    >
                        <Icon name="close-outline" width={32} height={32} fill={ultraDark} />
                    </Pressable>

                    <View style={styles.applyButton}>
                        <Text style={styles.applyText}>Dil Ayarları</Text>
                    </View>
                </View>
                {Languages.map((item, index) => (
                    <Pressable onPress={() => changeLanguage(item.name)} key={index} style={item.selected ? styles.selected : styles.default}>
                        <Text style={item.selected ? styles.textSelected : styles.text}>{item.name}</Text>
                        <CheckBox checked={item.selected} color={primary} />
                    </Pressable>
                ))}
            </SafeAreaView>
        </Modal>
    )
}

export default LanguageModal;