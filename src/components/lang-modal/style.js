import { StyleSheet } from "react-native";
import { primary, ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: '50%',
        backgroundColor: white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeButton: {
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    applyButton: {
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    applyText: {
        fontSize: 16,
        color: ultraDark,
        fontFamily: mediumText
    },
    selected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: '100%',
        padding: 15
    },
    default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: white,
        width: '100%',
        padding: 15
    },
    text: {
        fontSize: 16,
        color: ultraDark,
        fontFamily: mediumText
    },
    textSelected: {
        fontSize: 16,
        color: ultraDark,
        fontFamily: boldText
    }
})

export default styles;