import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { StackParamList } from './navigator';

type Props = NativeStackScreenProps<StackParamList, 'Item'>;

const ItemScreen: React.FC<Props> = props => {
  const route = props.route;

  return (
    <View>
      <Text>{route.params.item.nome}</Text>
      <Text>{route.params.item.descricao}</Text>
    </View>
  );
};

export default ItemScreen;
