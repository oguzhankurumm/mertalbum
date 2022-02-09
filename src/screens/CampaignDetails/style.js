import { StyleSheet } from 'react-native';
import { background, borderColor, lightGray, ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        backgroundColor: background
    },
    image: {
        marginTop: 10,
        width: '100%',
        height: 300,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    subContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: white,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 8
    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        fontFamily: boldText,
        color: ultraDark
    },
    description: {
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        fontFamily: mediumText,
        color: lightGray
    }
})

export default styles;