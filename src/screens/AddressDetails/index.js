import React from 'react';
import { View, ScrollView } from 'react-native';
import { primary } from '../../assets/styles/colors';
import styles from './style';
import { Item } from 'native-base';
import { TextInput } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const AddressDetails = () => {
    const routes = useRoute();
    const { data, type } = routes.params;

    const InputComp = ({ label, value, multiline }) => {
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
                    multiline={multiline}
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
                {type === "delivery" ?
                    <>
                        <InputComp label="Adres Adı" value={data.adress_name} />
                        <InputComp label="Ülke" value={data.country} />
                        <InputComp label="İl" value={data.city} />
                        <InputComp label="İçe" value={data.state} />
                        <InputComp label="Adres" value={data.Adresses} multiline={true} />
                        {data.postalcode !== null && <InputComp label="Posta Kodu" value={data.postalcode} />}
                        <InputComp label="Ad Soyad" value={`${data.name} ${data.surname}`} />
                        <InputComp label="T.C Kimlik No" value={data.Identify_number} />
                        <InputComp label="Telefon" value={data.PhoneGsm} />
                        <InputComp label="E-Posta" value={data.email} />
                    </>
                    :
                    <>
                        <InputComp label="Adres Adı" value={data.adress_name} />
                        <InputComp label="Ülke" value={data.country} />
                        <InputComp label="İl" value={data.city} />
                        <InputComp label="İçe" value={data.state} />
                        <InputComp label="Adres" value={data.Adresses} multiline={true} />
                        {data.postalcode !== null && <InputComp label="Posta Kodu" value={data.postalcode} />}
                        <InputComp label="Şirket Adı" value={data.company_title} />
                        <InputComp label="Ad Soyad" value={`${data.name} ${data.surname}`} />
                        <InputComp label="Vergi No" value={data.tax_no} />
                        <InputComp label="Vergi Dairesi" value={data.tax_place} />
                        <InputComp label="Telefon" value={data.PhoneGsm} />
                        <InputComp label="E-Posta" value={data.email} />
                    </>
                }
            </ScrollView>
        </View>
    )
}

export default AddressDetails;