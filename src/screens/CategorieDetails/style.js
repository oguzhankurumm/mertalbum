import { StyleSheet } from 'react-native';
import { white } from '../../assets/styles/colors';
import { boldText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 5
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
    titleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    title: {
        fontSize: 20,
        fontFamily: boldText,
        color: white
    }
})

export default styles;