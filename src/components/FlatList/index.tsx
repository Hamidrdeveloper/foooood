/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import { FlatList } from 'react-native';
import { IProductListRenderItem } from '~/@types';
import { Card } from '../ProductsList/components';
import { ViewPos } from './styles';

interface Type{
    data:Array<any>,
}
export default function FlatListH({ data }:Type) {
  const renderItem = ({ item }: IProductListRenderItem) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  );
  return (
    <>
      <ViewPos>
        <FlatList
          data={data}

          horizontal

          renderItem={(data: IProductListRenderItem) => renderItem(data)}
         
        />
      </ViewPos>
    </>
  );
}
