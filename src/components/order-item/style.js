import { StyleSheet } from "react-native";
import { background, black, lightGray, primary } from "../../assets/styles/colors";
import { boldText, mediumText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: background,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    secondContainer: {
        paddingLeft: 10
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    middleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    status: {
        fontFamily: boldText,
        fontSize: 16,
        color: primary
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        color: black
    },
    subtitle: {
        marginTop: 8,
        fontFamily: mediumText,
        fontSize: 14,
        color: lightGray
    }
})

export default styles;