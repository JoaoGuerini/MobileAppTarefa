import React from "react";
import { Text, TextInput, View } from "react-native";
import { ListType } from "../../models/listaCompras/listType";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../styles/list/style";

type Props = {
  text: string;
  setText: (item: string) => void;
};

export default function TextInputLista({ text, setText }: Props) {
  return (
    <TextInput style={styles.textInput} placeholder='Digite o Produto Desejado' value={text} onChangeText={(item) => setText(item)} />
  );
}
