import { StyleSheet } from "react-native";
import { primary, white } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    button: {
        backgroundColor: primary,
        padding: 20,
        marginBottom: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 18,
    },
    title: {
        fontSize: 16,
        color: white,
        fontFamily: boldText
    }
});

export default styles;