import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import AddressCard from '../../components/addresses/address-card';
import styles from './style';

const Addresses = ({ navigation }) => {
    const myAddresses = useSelector(state => state.addressReducer.addresses);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 30 }}
            style={styles.container}
        >
            {myAddresses.teslimatAdresi !== undefined &&
                <AddressCard data={myAddresses.teslimatAdresi} navigation={navigation} title="Teslimat Adresi" address={myAddresses.teslimatAdresi.Adresses} type="delivery" />
            }

            {myAddresses.faturaAdresi !== undefined &&
                <AddressCard data={myAddresses.faturaAdresi} navigation={navigation} title="Fatura Adresi" address={myAddresses.faturaAdresi.Adresses} type="invoice" />
            }

        </ScrollView>
    )
}

export default Addresses;