import { StyleSheet } from "react-native";
import { white } from "../../../assets/styles/colors";
import { boldText } from "../../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        borderRadius: 8,
        width: '100%',
        height: 200
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: white
    },
    renderItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8
    },
    paginationContainer: {
        position: 'absolute',
        bottom: -10,
    }
})

export default styles;