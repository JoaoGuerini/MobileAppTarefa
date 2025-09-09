import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#181DEA",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
    },
    emptyListTitle: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        paddingBottom: 10,
        textAlign: "center",
    },
    viewEvents: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    touchablePress: {
        backgroundColor: "white",
        paddingVertical: 17,
        paddingHorizontal: 17,
        borderRadius: 8,
    },
    touchablePressAction: {
        marginVertical: 30,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 8,
        gap: 5
    },
    touchableText: {
        color: "white",
        fontWeight: "bold",
    },
    viewFlatList: {
        marginTop: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 2,
        padding: 15,
        backgroundColor: "white",
    },
    viewItemRender: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    viewItemText: {
        fontSize: 16,
        fontFamily: "Arial",
        fontWeight: "800",
    }
});
