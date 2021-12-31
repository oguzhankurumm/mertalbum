import { StyleSheet } from "react-native";
import { ultraDark } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    searchbar: {
        width: '100%',
        borderRadius: 8
    },
    input: {
        fontFamily: boldText,
        fontSize: 16,
        color: ultraDark
    }
})

export default styles;