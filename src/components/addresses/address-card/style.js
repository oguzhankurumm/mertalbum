import { StyleSheet } from "react-native";
import { darkGray, gray, lightGray, primary, white } from "../../../assets/styles/colors";
import { boldText, mediumText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: white,
        padding: 20,
        borderRadius: 8,
        marginBottom: 10
    },
    right: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        color: primary
    },
    subtitle: {
        marginTop: 3,
        fontFamily: mediumText,
        fontSize: 14,
        color: lightGray
    }
})

export default styles;