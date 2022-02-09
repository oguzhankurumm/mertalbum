import React, { useState } from 'react';
import { View, ScrollView, Alert, Platform, Linking } from 'react-native';
import styles from './style';
import { Divider } from 'react-native-paper';
import MenuItem from '../../components/menu-item';
import ProfilePicture from '../../components/profile-picture';
import ProfileMenuItems from '../../config/profile-menus.json';
import ProfileSettingsMenu from '../../config/profile-setting-menus.json';
import LanguageModal from '../../components/lang-modal';
import ListTitle from '../../components/list-title';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { showMessage } from 'react-native-flash-message';

const Profile = ({ navigation }) => {
    const [showModal, setshowModal] = useState(false);
    const dispatch = useDispatch();
    const navigateToPage = link => navigation.navigate(link);
    const profileData = useSelector(state => state.authReducer.currentUser);

    const dialCall = () => {
        const phoneNumber = Platform.OS === 'android' ? `tel:+902126181113` : `telprompt:+902126181113`;

        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    showMessage({ message: 'Hata', description: 'Telefon numarası doğru görünnmüyor, lütfen elle girin.', type: 'danger', icon: 'danger', duration: 3000 });
                } else {
                    return Linking.openURL(phoneNumber);
                };
            })
            .catch(error => {
                showMessage({ message: 'Hata', description: 'Telefon numarası doğru görünnmüyor, lütfen elle girin.', type: 'danger', icon: 'danger', duration: 3000 })
                console.log('error:', error);
            });
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <LanguageModal
                visible={showModal}
                onBackButtonPress={() => setshowModal(false)}
                onBackdropPress={() => setshowModal(false)}
                close={() => setshowModal(false)}
            />
            <ProfilePicture name={profileData.name !== undefined && profileData.name !== "" ? `${profileData.name} ${profileData.surname}` : `${profileData.CompanyTitle}`} username={profileData.username} />

            {/* ACCOUNT MENU */}
            <View style={styles.itemContainer}>
                <ListTitle title="HESAP" />
                {ProfileMenuItems.map((item, index) => (
                    <View key={index}>
                        <MenuItem title={item.title} subtitle={item.subtitle} icon={item.icon} onPress={() => {
                            if (item.isCall) {
                                dialCall();
                            } else {
                                navigateToPage(item.link);
                            }
                        }} />
                        <Divider style={styles.divider} />
                    </View>
                ))}
            </View>

            {/* SETTINGS MENU */}
            <View style={styles.itemContainer2}>
                <ListTitle title="AYARLAR" />
                {ProfileSettingsMenu.map((item, index) => (
                    <View key={index}>
                        <MenuItem title={item.title} subtitle={item.subtitle} icon={item.icon} onPress={() => {
                            if (item.isLogout) {
                                Alert.alert('Çıkış Yap', 'Hesabınızdan çıkış yapılacak. Emin misiniz?', [
                                    { text: 'Evet', style: 'destructive', onPress: () => dispatch(logout()) },
                                    { text: 'Hayır', style: 'cancel' }
                                ])
                            } else if (item.selectedLang) {
                                setshowModal(!showModal);
                            } else {
                                navigateToPage(item.link);
                            }
                        }} isColored={item.isColored} />
                        {!item.hideDivider && <Divider style={styles.divider} />}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Profile;