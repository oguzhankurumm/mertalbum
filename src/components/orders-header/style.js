import { StyleSheet } from "react-native";
import { background, black, primary, white } from "../../assets/styles/colors";
import { mediumText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scrollContainer: {
        width: '100%'
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
        marginRight: 8,
        backgroundColor: background,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSelected: {
        marginRight: 8,
        backgroundColor: primary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;