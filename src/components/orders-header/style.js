import { StyleSheet } from "react-native";
import { background, black, lightGray, primary, white } from "../../assets/styles/colors";
import { boldText, mediumText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: mediumText,
        fontSize: 16,
        color: black
    },
    titleSelected: {
        fontFamily: mediumText,
        fontSize: 16,
        color: white
    },
    buttonDefault: {
        backgroundColor: background,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSelected: {
        backgroundColor: primary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;