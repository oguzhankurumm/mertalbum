import React from 'react';
import { View, ScrollView } from 'react-native';
import { primary } from '../../assets/styles/colors';
import styles from './style';
import { useSelector } from 'react-redux';
import { Item } from 'native-base';
import { TextInput } from 'react-native-paper';
import moment from 'moment';

const Settings = () => {
    const { userInfo } = useSelector(state => state.userInfoReducer);

    const InputComp = ({ label, value }) => {
        return (
            <Item style={styles.inputItem} >
                <TextInput
                    activeOutlineColor={primary}
                    selectionColor={primary}
                    underlineColor={primary}
                    mode="outlined"
                    allowFontScaling={false}
                    editable={false}
                    value={value}
                    label={label}
                    style={styles.input}
                />
            </Item>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 80 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <InputComp label="Hesap Adı" value={userInfo.CompanyTitle ? userInfo.CompanyTitle : userInfo.name + '' + userInfo.Surname} />
                <InputComp label="E-Posta" value={userInfo.email} />
                <InputComp label="Telefon" value={userInfo.Phone ? userInfo.Phone : userInfo.PhoneGsm} />
                <InputComp label="Ülke" value={userInfo.country} />
                <InputComp label="İl" value={userInfo.city} />
                <InputComp label="İlçe" value={userInfo.state} />
                <InputComp label="Adres" value={userInfo.Adress} />
                <InputComp label="Vergi Dairesi" value={userInfo.companytaxoffice} />
                <InputComp label="Son Güncelleme" value={moment(userInfo.updated_at, 'YYYY-MM-DDTHH:mm:ss').format('lll')} />
            </ScrollView>
        </View>
    )
}

export default Settings;