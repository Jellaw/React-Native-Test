import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View, TextInput, ImageBackground } from "react-native";
export const drug1 = require("../Image/drug1.png");
export const drug2 = require("../Image/drug2.png");
export const drug3 = require("../Image/drug3.png");
export const drug4 = require("../Image/drug4.png");
export const drug5 = require("../Image/drug5.png");
export const drug6 = require("../Image/drug6.png");
const DATA = [
  {
    id: "1",
    title: "THE ORDINARY",
    nameProduct: "Peeling Solution 300ml",
    image:drug1,
    cost:'$80.00'
  },
  {
    id: "2",
    title: "THE ORDINARY",
    nameProduct:"Plant-Derived Hemi Squal 25ml",
    image:drug2,
    cost:'$80.00'
  },
  {
    id: "3",
    title: "THE ORDINARY",
    nameProduct: "Peeling Solution 300ml",
    image:drug3,
    cost:'$80.00'
  },
  {
    id: "4",
    title: "THE ORDINARY",
    nameProduct:"Plant-Derived Hemi Squal 25ml",
    image:drug4,
    cost:'$80.00'
  },
  {
    id: "5",
    title: "THE ORDINARY",
    nameProduct: "Peeling Solution 300ml",
    image:drug5,
    cost:'$80.00'
  },
  {
    id: "6",
    title: "THE ORDINARY",
    nameProduct:"Plant-Derived Hemi Squal 25ml",
    image:drug6,
    cost:'$80.00'
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item,]}>
  <View style={{alignItems:'center'}}>
    <Image source={item.image}
      style = {{width:100,height:100,alignItems:'center',marginVertical:8}}
          resizeMode='center'>
    </Image>
  </View>
  <Text style={[styles.titleItem]}>{item.title}</Text>
  <Text style={[styles.nameItem]}>{item.nameProduct}</Text>
  <View style={{
    flexDirection:'row',
    marginTop:15
  }}>
    <Text style={styles.costItem}>{item.cost}</Text>
    <Text style={styles.addToCartItem}>Add+</Text>
  </View>
  
</TouchableOpacity>
);

const ProductsList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <View style={{
        paddingHorizontal:8,
        flex:1
      }}>
        <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
      </View>
    
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Medicines &</Text>
      <Text style={{
        fontSize: 25,
        width:'65%',
        alignItems:'flex-start',
        fontWeight:'bold'}}>Health Products</Text>
      <FlatList
        data={DATA}
        contentContainerStyle={styles.flatListCustom}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={{marginTop:10,flex:3,}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#f4f5f9',
    flexDirection:'column',
    marginVertical:8,
    marginHorizontal:16,
    justifyContent:'flex-start'
  },
  flatListCustom: {
    marginVertical:8,
  },
  backgroundCustom:{
    flex:1,
    backgroundColor:'#fff',
    borderBottomLeftRadius:100,
    justifyContent:'flex-start'
    
  },
  headerTitle:{
    fontSize: 25,
    width:'65%',
    marginTop:10,
    alignItems:'flex-start',
    fontWeight:'bold'
  },
  item: {
    backgroundColor:'#fff',
    padding: 10,
    marginVertical: 8,
    borderTopRightRadius:10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent:'center'
  },
  titleItem:{
    fontSize: 10,
    width:'65%',
    color:'#b6b4bf',
    alignItems:'flex-start',
  },
  nameItem:{
    fontSize: 13,
    color:'#111',
    alignItems:'flex-start',
  },
  costItem:{
    fontSize: 15,
    flex:1,
    color:'#111',
    fontWeight:'bold',
    alignItems:'flex-start',
  },
  addToCartItem:{
    fontSize: 15,
    flex:1,
    fontWeight:'bold',
    color:'#4c509c',
    position:'absolute',
    right:0,
    alignItems:'flex-end',
  }
});

export default ProductsList;