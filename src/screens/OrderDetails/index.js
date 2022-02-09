import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BottomButton from '../../components/common/bottom-button';
import moment from 'moment';
import 'moment/locale/tr';
import styles from './style';
import { showMessage } from 'react-native-flash-message';

const OrderDetails = () => {
    const routes = useRoute();
    const { item } = routes.params;

    const getStatus = () => {
        switch (item.durum) {
            case "siparislerim/siparislerim.kontrol":
                return "Kontrol Ediliyor";
                break;
            case "siparislerim/siparislerim.photoshop":
                return "Photoshop";
                break;
            case "siparislerim/siparislerim.baskida":
                return "Baskıda";
                break;
            case "siparislerim/siparislerim.imalatda":
                return "İmalatda";
                break;
            case "siparislerim/siparislerim.kapak":
                return "Kapak";
                break;
            case "siparislerim/siparislerim.blok":
                return "Blok";
                break;
            case "siparislerim/siparislerim.montaj":
                return "Montaj";
                break;
            case "siparislerim/siparislerim.paket":
                return "Paket";
                break;
            case "siparislerim/siparislerim.kargo":
                return "Kargoda";
                break;
            case "siparislerim/siparislerim.tamamlandi":
                return "Tamamlandı";
                break;
            case "siparislerim/siparislerim.lazer":
                return "Lazer";
                break;
            default:
                return "Bilinmiyor";
                break;
        }
    }

    const getCoverLetter = () => {
        if (item.kapakyazi) {
            const base_Data = JSON.parse(item.kapakyazi);
            if (base_Data.collection) {
                return base_Data?.collection.map(bd => bd.coverLetter);
            }
        }
    };

    const getOrderNote = () => {
        if (item.kapakyazi) {
            const base_Data = JSON.parse(item.kapakyazi);
            if (base_Data.collection) {
                return base_Data?.collection.map(bd => bd.orderNote);
            }
        }
    };

    const openCargo = ({ cargoName, code }) => {
        const link = cargoName === 'Aras Kargo' ? `https://kargotakip.araskargo.com.tr/mainpage.aspx?code=${code}` : `https://selfservis.yurticikargo.com/reports/SSWDocumentDetail.aspx?DocId=${code}`;
        Linking.canOpenURL(link)
            .then(supported => {
                if (supported) {
                    Linking.openURL(link);
                } else {
                    showMessage({ message: 'Hata', description: 'Link açılırken bir sorun oluştu.', type: 'danger', icon: 'danger' });
                }
            })
            .catch(err => {
                showMessage({ message: 'Hata', description: 'Link açılırken bir sorun oluştu.', type: 'danger', icon: 'danger' });
            });
    }
    const collectionData = item.kapakyazi !== undefined ? JSON.parse(item.kapakyazi) : [];
    const dataLine = [
        { title: 'Ad Soyad', value: item.adsoyad },
        { title: 'Telefon', value: item.telefon },
        { title: 'E-Posta', value: item.email },
        { title: 'Adres', value: item.ship_adreses }
    ]
    const invoiceData = [
        { title: 'Ad Soyad', value: item.adsoyad },
        { title: 'Telefon', value: item.telefon },
        { title: 'E-Posta', value: item.email },
        { title: 'Adres', value: item.bill_adress }
    ]
    const paymentData = [
        { title: 'Ödeme Türü', value: item.odemeturu },
        { title: 'Kargo', value: item.name },
        { title: 'Toplam', value: `${parseFloat(item.tutar).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${item.simge}` },
        { title: 'Tarih', value: moment(item.tarih).format('lll') }
    ]
    const detailsData = [{ title: 'Sipariş Durumu', value: getStatus() }, { title: 'Sipariş Notu', value: getOrderNote() !== undefined ? getOrderNote()[0] : '-' }, { title: 'Kapak Yazısı', value: getCoverLetter() !== undefined ? getCoverLetter()[0] : '-' }]

    const OrderComp = ({ title, data }) => (
        <View style={styles.orderContainer}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                {data.map((item, index) => {
                    return (item.value !== undefined && item.value !== null &&
                        <View key={Math.random() * index} style={styles.viewContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.value}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )

    const ProductListComp = ({ title }) => (
        <View style={styles.orderContainer}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.detailsContainer}>
                {collectionData.product.map((item, index) => (
                    <View key={index} style={styles.viewContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.subtitle}>{item.adet} Adet</Text>
                    </View>
                )
                )}
            </View>
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <OrderComp title="Detaylar" data={detailsData} />
                {collectionData.product !== undefined && collectionData.product.length > 0 &&
                    <ProductListComp title="Ürünler" />
                }
                <OrderComp title="Ödeme Bilgileri" data={paymentData} />
                <OrderComp title="Teslimat Adresi" data={dataLine} />
                <OrderComp title="Fatura Adresi" data={invoiceData} />
            </ScrollView>
            {item.durum === "siparislerim/siparislerim.kargo" &&
                <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
                    <BottomButton title="Kargo Takip" onPress={() => openCargo({ cargoName: item.name, code: item.cargotruckno })} />
                </View>
            }
        </View>
    );
}

export default OrderDetails;