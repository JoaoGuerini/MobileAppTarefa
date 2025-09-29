import React from "react";
import { Text, View } from "react-native";
import { ListType } from "../../models/listaCompras/listType";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../styles/list/style";

type Props = {
  item: ListType;
  onDelete: (item: ListType) => void;
};

export default function ItemLista({ item, onDelete }: Props) {
  return (
    <>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.viewItemRender}>
          <Fontisto name="checkbox-active" size={24} color="black" />
          <Text style={styles.viewItemText}>{item.nome}</Text>
        </View>
        <MaterialCommunityIcons
          name="delete-empty"
          size={30}
          color="black"
          onPress={() => onDelete(item)}
        />
      </View>
      <View
        style={{ height: 2, backgroundColor: "#ccc", marginVertical: 10 }}
      />
    </>
  );
}
