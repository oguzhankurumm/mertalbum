import { StyleSheet } from 'react-native';
import { background, darkGray, primary, white } from '../../../assets/styles/colors';
import { boldText, mediumText } from '../../../assets/styles/fonts';

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: white,
        borderRadius: 8,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 10,
        height: 280,
        borderRadius: 12,
        resizeMode: 'contain'
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: boldText,
        color: primary
    },
    description: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: mediumText,
        color: darkGray
    },
    rightButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: background,
        borderRadius: 50
    }
})

export default styles;