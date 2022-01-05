import { StyleSheet } from "react-native";
import { primary, ultraDark, white } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        resizeMode: "cover",
        padding: 10,
        height: 150,
        width: 180,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    image: {
        borderRadius: 8,
    },
    bottomContainer: {
        width: 180,
        backgroundColor: 'rgba(0,0,0, 0.4)',
        position: 'absolute',
        overflow: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        bottom: 0,
        right: 0,
        left: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    title: {
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
        color: primary
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
})

export default styles;