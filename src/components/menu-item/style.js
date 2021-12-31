import { StyleSheet } from "react-native";
import { background, black, lightGray, primary } from "../../assets/styles/colors";
import { boldText, mediumText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: background,
        width: 50,
        height: 50,
        marginRight: 15
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        color: black
    },
    titleColored: {
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