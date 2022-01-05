import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import styles from './style';
import { Item } from 'native-base';
import { Switch } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import BottomButton from '../../components/common/bottom-button';
import { primary } from '../../assets/styles/colors';
import { login } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [RememberMe, setRememberMe] = useState(true);

    const [EmailTextInputRef, setEmailTextInputRef] = useState(null);
    const [PasswordTextInputRef, setPasswordTextInputRef] = useState(null);

    const LoginHandler = () => {
        dispatch(login(Email, Password, RememberMe));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Tekrar hoşgeldiniz!</Text>
                        <Text style={styles.subTitle}>Hesabınıza erişmek için giriş yapın.</Text>
                    </View>

                    <Item style={styles.inputItem}>
                        <TextInput
                            activeOutlineColor={primary}
                            selectionColor={primary}
                            underlineColor={primary}
                            mode="outlined"
                            autoFocus={true}
                            ref={input => setEmailTextInputRef(input)}
                            onSubmitEditing={() => PasswordTextInputRef._root.focus()}
                            autoCorrect={false}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={150}
                            returnKeyType={"next"}
                            value={Email}
                            onChangeText={em => setEmail(em)}
                            keyboardType="email-address"
                            placeholder='E-Posta'
                            label="E-Posta"
                            style={styles.input}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <TextInput
                            activeOutlineColor={primary}
                            selectionColor={primary}
                            underlineColor={primary}
                            mode="outlined"
                            ref={input => setPasswordTextInputRef(input)}
                            blurOnSubmit={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={150}
                            returnKeyType={"done"}
                            value={Password}
                            onChangeText={value => setPassword(value)}
                            secureTextEntry={showPassword}
                            keyboardType="default"
                            label="Parolanız"
                            placeholder='Parolanız (en az 6 hane)'
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => setShowPassword(!showPassword)} name={showPassword ? "eye-outline" : "eye-off-outline"} />}
                        />
                    </Item>

                    <View style={styles.buttons}>
                        <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgot}>Parolamı Unuttum</Text>
                        </Pressable>
                        <View style={styles.switchContainer}>
                            <Text style={styles.remember}>Beni Hatırla</Text>
                            <Switch color={primary} style={styles.switch} value={RememberMe} onValueChange={() => setRememberMe(!RememberMe)} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <BottomButton title="Giriş Yap" Loading={Loading} disabled={Loading} onPress={LoginHandler} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;