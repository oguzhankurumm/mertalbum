import { StyleSheet } from 'react-native';
import { white } from '../../assets/styles/colors';
import { boldText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    image: {
        borderRadius: 8,
        height: 300
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        color: white
    },
})

export default styles;