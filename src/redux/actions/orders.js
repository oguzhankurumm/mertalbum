import { GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED } from '../constants';
import ApiUrl from '../../api/ApiUrl';
import axios from 'axios';

export const getOrders = token => async dispatch => {
    dispatch({ type: GET_ORDERS_START })
    try {
        const getData = await axios.post(`${ApiUrl}/myorder?tip=3`, { "token_": token })
        console.log('get:', getData);
        // dispatch({ type: GET_ORDERS_SUCCESS, orders: getData.data.siparisler })
        dispatch({
            type: GET_ORDERS_SUCCESS, orders:
                [
                    {
                        "id": 527123,
                        "logorefid": 26458,
                        "logo2refid": 4208,
                        "logoodeme": 2,
                        "logo2odeme": 2,
                        "faturaNo": "MEC2021000009652",
                        "user_id": 1068,
                        "member_id": 4,
                        "customer_note": null,
                        "Kapak_yazi": null,
                        "payments_type": 2,
                        "kapidaodemeturu": 1,
                        "page_num": null,
                        "page_type": null,
                        "model_id": 0,
                        "orderstatus": 1,
                        "stage_id": 10,
                        "Kapak": 1,
                        "Blok": 1,
                        "Montaj": 1,
                        "Lazer": 1,
                        "wetransfer": 0,
                        "Yurtdisi": 0,
                        "album": 0,
                        "demo": 0,
                        "demoindirim": null,
                        "demoaciklama": null,
                        "demored": 0,
                        "magaza": 0,
                        "maket": 0,
                        "calisma": 0,
                        "musterionay": 0,
                        "yoneticionay": 0,
                        "Pazarlamaonay": 0,
                        "sorunlu": 0,
                        "sorunraeson": null,
                        "geciken": 0,
                        "Cikmasigerekli": 0,
                        "iptal": 0,
                        "acil": 0,
                        "acilcikisdate": null,
                        "tamir_iade": 0,
                        "yazdirma_bekleyen": 0,
                        "farkliadres": 0,
                        "DeliveryAdress": 822,
                        "InvoiceAdress": 1059,
                        "Cargo_type": 8,
                        "AhsapColors": 0,
                        "albumtype": null,
                        "ordersjson": "{\"collection\":[{\"coverLetter\":\"S\\u00dcMEYRA & SAL\\u0130H B\\u0130LAL 25.06.2021\",\"orderNote\":null,\"adet\":1,\"collectid\":\"4\",\"collectname\":\"PUKKA COLLECTION\",\"collectprice\":0,\"sizeid\":\"3\",\"sizename\":\"32.5x65\",\"sizeprice\":0,\"paketid\":\"231\",\"paketname\":\"32.5x65 Pukka Aile Paket\",\"paketprice\":\"910.00\",\"modelid\":\"344\",\"modelname\":\"DREAM\",\"modelprice\":0,\"clothid\":\"1819\",\"clothname\":\"Siyah Kuma\\u015f (pukka)\",\"clothprice\":0,\"worktype\":\"Ben \\u00c7al\\u0131\\u015ft\\u0131m\",\"studyoprice\":0,\"discekimprice\":0,\"dizgiprice\":0,\"lettercount\":\"10\",\"letterprice\":null,\"baskiid\":\"1\",\"baskiname\":\"Matt Print\",\"baskiprice\":\"0\",\"ahsapid\":null,\"ahsapname\":null,\"ahsapprice\":0}],\"product\":[{\"extraid\":\"64\",\"name\":\"32.5x65 Yeni Pukka Kutu\",\"price\":\"270.00\",\"adet\":1}]}",
                        "subtotal": "850.00",
                        "grandtotal": "1003.00",
                        "kur": "1.000",
                        "tlkur": "1.000",
                        "parabirim": "TRY",
                        "parasimge": "\u20ba",
                        "degistirme": 0,
                        "tax_amount": "153.00",
                        "cargoprice": "0.00",
                        "cargodetail": "[{\"id\":8,\"name\":\"Yurti\\u00e7i Kargo\",\"price\":0,\"status\":\"\\u00dccretsiz G\\u00f6nderim\"}]",
                        "Track_number": null,
                        "Kdv": 18,
                        "cargodelivery": 1,
                        "kapidaodemeprice": "8.00",
                        "orderparti": 1,
                        "cancelreason": null,
                        "ip": "78.168.219.162",
                        "lazerdurum": 1,
                        "Barcodestatus": 0,
                        "status": 1,
                        "paymentekinform": "2",
                        "country": 225,
                        "cargotruckno": "001",
                        "bill_adresname": "\u0130\u015f",
                        "bill_name": "ERKAN \r\n",
                        "bill_surname": "ERDEM\r\n",
                        "bill_email": "erkanerdem2424@gmail.com",
                        "bill_phone": "04462246298",
                        "bill_identy": "18812193902\r\n",
                        "bill_adress": "Atat\u00fcrk  MAHALLES\u0130  Z\u00fcbeyde Han\u0131m\r\n",
                        "bill_ctitle": "ERKAN ERDEM FOTO\u011eRAF ST\u00dcDYON - ERKAN ERDEM\r\n",
                        "bill_taxno": "",
                        "bill_taxpalace": "FEVZ\u0130PA\u015eA\r\n",
                        "bill_country": 225,
                        "bill_city": 2160,
                        "bill_state": 940,
                        "bill_postalcode": null,
                        "ship_adresname": "\u0130\u015f",
                        "ship_name": "ERKAN \r\n",
                        "ship_surname": "ERDEM\r\n",
                        "ship_email": "erkanerdem2424@gmail.com",
                        "ship_phone": "04462246298",
                        "ship_adreses": "Atat\u00fcrk  MAHALLES\u0130  Z\u00fcbeyde Han\u0131m\r\n",
                        "ship_country": 225,
                        "ship_city": 2160,
                        "ship_state": 940,
                        "ship_postalcode": null,
                        "Intcargocode": 1,
                        "zplfile": null,
                        "poserror": 0,
                        "filehash": "befa218713abbd9b520dfa3d7d5e1433",
                        "dosyayukleme": 1,
                        "dosyaindirme": 1,
                        "odemetarihi": null,
                        "silme": 0,
                        "sunucudasilme": 0,
                        "tamamlanmatarihi": "2021-12-22",
                        "barkodetur": 0,
                        "created_at": "2021-12-17T14:16:16.000000Z",
                        "updated_at": "2021-12-22T17:00:02.000000Z"
                    }
                ]
        })
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILED, error: error.message })
    }
}