import { StyleSheet } from 'react-native';
import { ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    subContainer: {
        marginTop: -10,
        padding: 20,
        backgroundColor: white,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        fontFamily: boldText,
        color: ultraDark
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: mediumText,
        color: ultraDark
    }
})

export default styles;