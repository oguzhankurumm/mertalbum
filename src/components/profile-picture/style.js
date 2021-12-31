import { StyleSheet } from "react-native";
import { background, black, lightGray } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        marginTop: 10,
        fontFamily: boldText,
        fontSize: 18,
        color: black
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    link: {
        fontFamily: mediumText,
        fontSize: 14,
        color: lightGray,
        marginRight: 5
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        backgroundColor: background
    }
})

export default styles;