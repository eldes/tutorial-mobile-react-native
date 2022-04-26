import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from '../models/item';

const itens: Item[] = [
  {
    id: 1,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 2,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 3,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 4,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 5,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 6,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 7,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 8,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 9,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 10,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 11,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 12,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 13,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 14,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 15,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 16,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 17,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 18,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 19,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 20,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 21,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 22,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 23,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 24,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
  {
    id: 25,
    nome: 'Coca-cola',
    descricao: 'Refrigerante em lata.',
  },
  {
    id: 26,
    nome: 'Pudim',
    descricao: 'Pudim de leite condensado.',
  },
  {
    id: 27,
    nome: 'Cachorro-quente',
    descricao: 'Lanche grande.',
  },
]

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  flatList: {
    flexGrow: 1,
    height: 1,
  },

  listItem: {
    backgroundColor: '#ff0',
    padding: 20,
    marginBottom: 20,
  },

  listItemText: {
    fontSize: 24,
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  botao: {
    marginVertical: 16,
    backgroundColor: '#000',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
})

const HomeScreen: React.FC = () => {

  const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.nome}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        renderItem={renderFlatListItem}
        data={itens}
      />
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Novo Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default HomeScreen;