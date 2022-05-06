import {
  Image,
  Button,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {categoryData, menuData} from '../../assets/Contant';
import {ICONS} from '../../assets/Images';
import {COLORS} from '../../assets/Theme';

export default HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 30,
          width: 70,
          height: 110,
          paddingVertical: 10,
          backgroundColor: 'tomato',
          borderRadius: 35,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={item.icon}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            color: 'white',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderMenu = ({item}) => {
    return (
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("detail", {item})}>
          <Image
            style={{
              width: 350,
              height: 170,
              borderRadius: 20,
            }}
            source={item.photo}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width: 20, height: 20}} source={ICONS.star}></Image>
            <Text style={{color: ' black', fontWeight: '500'}}>
              {' '}
              {item.star} {item.price} $$$
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('detail')}
    //   />
    // </View>
    <View style={{backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Image style={{width: 20, height: 20}} source={ICONS.location} />
        <Text
          style={{
            color: COLORS.black,
            backgroundColor: COLORS.lightGray3,
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 30,
          }}>
          745 Lincoln PI
        </Text>
        <Image style={{width: 20, height: 20}} source={ICONS.shopping_basket} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            color: 'black',
          }}>
          Main Category
        </Text>
        <ScrollView>
          <FlatList
            data={categoryData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <FlatList data={menuData} renderItem={renderMenu} />
        </ScrollView>
      </View>
    </View>
  );
};
