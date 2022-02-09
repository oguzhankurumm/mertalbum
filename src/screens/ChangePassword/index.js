import React, { useState, useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { primary } from '../../assets/styles/colors';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from 'native-base';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomButton from '../../components/common/bottom-button';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import ApiUrl from '../../api/ApiUrl';
import { logout } from '../../redux/actions/auth';

const ChangePassword = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.authReducer.currentUser);
    const [Loading, setLoading] = useState(false);
    const [OldPassword, setOldPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [NewPasswordAgain, setNewPasswordAgain] = useState('');
    const [ShowPassword, setShowPassword] = useState(false);

    const OldPasswordRef = useRef(null);
    const NewPasswordRef = useRef(null);
    const NewPasswordAgainRef = useRef(null);

    const PasswordHandler = async () => {
        console.log({ OldPassword, NewPassword, NewPasswordAgain });
        if (NewPassword !== NewPasswordAgain) {
            setLoading(false);
            showMessage({ message: 'Hata', description: 'Şifreler uyuşmuyor!', type: 'danger', icon: 'danger', duration: 3000 })
            return;
        } else {
            setLoading(true);
            try {
                const response = await axios.post(`${ApiUrl}/changePassword`, {
                    token_: profileData.token,
                    eskiSifre: OldPassword,
                    yeniSifre: NewPassword,
                    yeniSifreTekrar: NewPasswordAgain
                })
                setLoading(false);
                if (response.data.success === 1) {
                    showMessage({ message: 'Başarılı', description: response.data.message, type: 'success', icon: 'success', duration: 3000 })
                    setTimeout(() => {
                        dispatch(logout());
                    }, 500);
                } else {
                    showMessage({ message: 'Hata', description: response.data.message, type: 'danger', icon: 'danger', duration: 3000 })
                }
            } catch (error) {
                setLoading(false);
                showMessage({ message: 'Hata', description: 'Parola değiştirilirken bir hata oluştu!', type: 'danger', icon: 'danger', duration: 3000 })
            }
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                bounces={false}
                enableAutomaticScroll={true}
                style={{ flex: 1 }}
                extraHeight={150}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewContainer}>
                    <Item style={styles.inputItem}>
                        <TextInput
                            ref={OldPasswordRef}
                            activeOutlineColor={primary}
                            selectionColor={primary}
                            underlineColor={primary}
                            mode="outlined"
                            onSubmitEditing={() => NewPasswordRef.current.focus()}
                            autoCorrect={false}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={150}
                            returnKeyType={"next"}
                            value={OldPassword}
                            onChangeText={em => setOldPassword(em)}
                            secureTextEntry={!ShowPassword}
                            keyboardType="default"
                            placeholder='Mevcut parolanızı yazın'
                            label="Mevcut Parola"
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => setShowPassword(!ShowPassword)} name={ShowPassword ? "eye-outline" : "eye-off-outline"} />}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <TextInput
                            ref={NewPasswordRef}
                            activeOutlineColor={primary}
                            selectionColor={primary}
                            underlineColor={primary}
                            mode="outlined"
                            onSubmitEditing={() => NewPasswordAgainRef.current.focus()}
                            autoCorrect={false}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={150}
                            returnKeyType={"next"}
                            value={NewPassword}
                            onChangeText={value => setNewPassword(value)}
                            secureTextEntry={!ShowPassword}
                            keyboardType="default"
                            label="Yeni Parola"
                            placeholder='Yeni parola (en az 6 hane)'
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => setShowPassword(!ShowPassword)} name={ShowPassword ? "eye-outline" : "eye-off-outline"} />}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <TextInput
                            ref={NewPasswordAgainRef}
                            activeOutlineColor={primary}
                            selectionColor={primary}
                            underlineColor={primary}
                            mode="outlined"
                            blurOnSubmit={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={150}
                            returnKeyType={"done"}
                            value={NewPasswordAgain}
                            onChangeText={value => setNewPasswordAgain(value)}
                            secureTextEntry={!ShowPassword}
                            keyboardType="default"
                            label="Yeni Parola Tekrar"
                            placeholder='Yeni parolanızı tekrar yazın'
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => setShowPassword(!ShowPassword)} name={ShowPassword ? "eye-outline" : "eye-off-outline"} />}
                        />
                    </Item>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.bottomContainer}>
                <BottomButton title="Parolayı Değiştir" Loading={Loading} disabled={Loading} onPress={PasswordHandler} />
            </View>
        </SafeAreaView >
    )
}

export default ChangePassword;