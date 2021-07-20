import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View, Slider } from "react-native";
export const iconSplash = require("./Image/splash.png");
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Find Doctors",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Chat with Doctors",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Medicines and Products",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <View style={styles.customImageView}>
    <Image style={{width:'65%',height:100, marginRight: -20,}}
          source={iconSplash}
          resizeMode='contain' />
    </View>
    
  </TouchableOpacity>
  
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
  
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    marginTop: 100,
  },
  item: {
    width:230,
    paddingLeft: 20,
    paddingTop:20,
    paddingRight:20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopRightRadius:50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  title: {
    fontSize: 18,
    width:'65%',
    alignItems: 'center',
    shadowColor: '#111',
    justifyContent: 'center',
  },
  titleScreen: {
    fontSize: 32,
    flex:1,
    color:'#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  customImageView: {
    height: '100%',
    width:'100%',
    flexDirection:'column-reverse',
    alignItems:'flex-end',
    position:'absolute',
    bottom:0,
  },
});

export default App;