import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {ICONS} from '../../../assets/Images';
import {COLORS} from '../../../assets/Theme';

export default DetailScreen = ({navigation, route}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Image style={{width: 20, height: 20}} source={ICONS.back} />
        <Text
          style={{
            color: COLORS.black,
            backgroundColor: COLORS.lightGray3,
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 30,
          }}>
          Burger Story
        </Text>
        <Image style={{width: 20, height: 20}} source={ICONS.list} />
      </View>

      <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <Image
          style={{width: 300, height: 300, borderRadius: 120}}
          source={route.params.item.photo}></Image>
        <Text
          style={{color: 'black', fontSize: 25, fontWeight: '500', margin: 20}}>
          {route.params.item.name}-${route.params.item.price}
        </Text>
        <Text style={{color: 'black', marginTop: -10}}>
          {route.params.item.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 20, height: 20}} source={ICONS.fire}></Image>
          <Text>{route.params.item.calories}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 300,
          marginTop: 12,
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
        }}>
            <View style={{flexDirection: "row", justifyContent:"space-between", padding: 24}}>
                <Text style={{color:"black", fontSize: 20, fontWeight: "500"}}>1 Item In Card</Text>
                <Text style={{color:"black", fontSize: 20, fontWeight: "500"}}>$23</Text>
            </View>
            <View>

            </View>
        </View>
    </View>
  );
};
