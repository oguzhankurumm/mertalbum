import { StyleSheet } from 'react-native';
import { ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 5
    },
    imageBg: {
        margin: 5,
        height: 200,
        borderRadius: 8
    },
    image: {
        borderRadius: 8,
        height: 200
    },
    topContainer: {
        overflow: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    bottomContainer: {
        overflow: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 10,
        height: 200
    },
    imageStyle: {
        width: '100%',
        borderRadius: 8,
        height: 200
    },
    title: {
        fontFamily: mediumText,
        fontSize: 16,
        color: ultraDark
    },
    price: {
        fontFamily: boldText,
        fontSize: 16,
        color: ultraDark
    },
})

export default styles;