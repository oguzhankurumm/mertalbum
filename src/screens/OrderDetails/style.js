import { StyleSheet } from 'react-native';
import { background, primary, ultraDark } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: background,
        padding: 10
    },
    viewContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
    },
    orderContainer: {
        marginBottom: 10
    },
    titleContainer: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1'
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: primary,
        fontFamily: boldText
    },
    title: {
        textAlign: 'left',
        fontSize: 16,
        color: ultraDark,
        fontFamily: mediumText,
        maxWidth: '70%'
    },
    subtitle: {
        textAlign: 'right',
        fontSize: 15,
        color: ultraDark,
        fontFamily: boldText,
        maxWidth: '70%'
    },
    detailsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    }
})

export default styles;