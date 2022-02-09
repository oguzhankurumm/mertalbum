import { StyleSheet } from "react-native";
import { primary, white } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '48%',
        marginTop: 5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8
    },
    title: {
        marginTop: 10,
        fontFamily: boldText,
        fontSize: 16,
        color: primary
    }
})

export default styles;