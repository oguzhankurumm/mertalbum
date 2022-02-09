import { StyleSheet } from "react-native";
import { primary, ultraDark, white } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        margin: 5,
        height: 250,
        borderRadius: 8
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    image: {
        borderRadius: 8,
        height: 250
    },
    bottomContainer: {
        backgroundColor: 'rgba(0,0,0, 0.4)',
        position: 'absolute',
        overflow: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        color: white
    },
    price: {
        fontFamily: boldText,
        fontSize: 16,
        color: white
    },
    headerTitle: {
        fontFamily: boldText,
        fontSize: 18,
        color: ultraDark
    },
    headerRightTitle: {
        fontFamily: boldText,
        fontSize: 16,
        color: primary,
        marginRight: 5
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
})

export default styles;