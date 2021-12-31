import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import MenuItem from '../../components/menu-item';
import ProfilePicture from '../../components/profile-picture';
import ProfileMenuItems from '../../config/profile-menus.json';
import ProfileSettingsMenu from '../../config/profile-setting-menus.json';
import ListTitle from '../../components/list-title';
import styles from './style';

const Profile = ({ navigation }) => {
    const imageUrl = 'https://evrice.com/static/account/0x1be05056da84ec7a8020e54119c0a8c872197ec8/216e2a6b-73d2-4061-8419-3ce9029888c7.jpg';

    const changeAvatar = () => Alert.alert('Change avatar', 'değiştir');
    const editProfile = () => Alert.alert('Edit profile', 'değiştir');
    const navigateToPage = () => Alert.alert('navigate', 'me');

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingVertical: 30 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <ProfilePicture name="Oğuzhan Kurum" image={imageUrl} onImagePress={changeAvatar} onEditPress={editProfile} />

            {/* ACCOUNT MENU */}
            <View style={styles.itemContainer}>
                <ListTitle title="HESAP" />
                {ProfileMenuItems.map((item, index) => (
                    <View key={index}>
                        <MenuItem title={item.title} subtitle={item.subtitle} icon={item.icon} onPress={() => navigateToPage(item.link)} />
                        <Divider style={styles.divider} />
                    </View>
                ))}
            </View>

            {/* SETTINGS MENU */}
            <View style={styles.itemContainer2}>
                <ListTitle title="AYARLAR" />
                {ProfileSettingsMenu.map((item, index) => (
                    <View key={index}>
                        <MenuItem title={item.title} subtitle={item.subtitle} icon={item.icon} onPress={() => navigateToPage(item.link)} isColored={item.isColored} />
                        {!item.hideDivider && <Divider style={styles.divider} />}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Profile;