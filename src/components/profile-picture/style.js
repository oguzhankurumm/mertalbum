import { StyleSheet } from "react-native";
import { background, black, lightGray } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    name: {
        marginTop: 20,
        fontFamily: boldText,
        fontSize: 18,
        color: black
    },
    link: {
        fontFamily: mediumText,
        fontSize: 14,
        color: lightGray
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: background
    }
})

export default styles;