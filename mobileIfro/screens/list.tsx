import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/list/style';
import { ListType } from '../models/listaCompras/listType';

import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Lista() {
    const [text, setText] = useState('');
    const [list, setList] = useState<ListType[]>([]);

    const addItem = () => {
        if (text.trim().length === 0) return;

        const newItem: ListType = {
            id: Date.now().toString(),
            nome: text.trim(),
        }

        setList([...list, newItem]);
        setText(``);
    }

    const DeleteItem = (item : ListType) => {
        var newList = list.filter(x => x.id != item.id)
        setList(newList)
    }

    const ItemRender = (item: ListType) => (
        <>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.viewItemRender}>
                    <Fontisto name="checkbox-active" size={24} color="black" />
                    <Text style={styles.viewItemText}>{item.nome}</Text>
                </View>
                <MaterialCommunityIcons name="delete-empty" size={30} color="black" onPress={() => DeleteItem(item) }/>
            </View>
            <View style={{ height: 2, backgroundColor: '#ccc', marginVertical: 10 }} />
        </>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.textTitle}>Lista de compras</Text>
            <View style={styles.viewEvents}>
                <TextInput style={styles.textInput} placeholder='Digite o Produto Desejado' value={text} onChangeText={(txt) => setText(txt)} />
                <TouchableOpacity style={styles.touchablePress} onPress={addItem}>
                    <FontAwesome6 name="cart-plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {list.length > 0 ? (
                <>
                    <FlatList
                        style={styles.viewFlatList}
                        data={list}
                        renderItem={(item) => <ItemRender {...item.item} />}
                    />
                    <View>
                        <TouchableOpacity style={styles.touchablePressAction} onPress={() => setList([])}>
                            <MaterialIcons name="delete-sweep" size={24} color="black" />
                            <Text style={styles.viewItemText}>Deletar todos</Text>
                        </TouchableOpacity>
                    </View>
                </>) : 
                <Text style={styles.emptyListTitle}>Nenhum item adicionado</Text>}
        </SafeAreaView>
    )
}
