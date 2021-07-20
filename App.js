import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View, TextInput } from "react-native";
export const iconSplash = require("./Image/splash.png");
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Find Doctors",
    color: "#4520bb",
    colorClicked:'#3dddd0'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Chat with Doctors",
    color:"#ef8565",
    colorClicked:'#ea20d2'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Medicines and Products",
    color:"#67c8d7",
    colorClicked:'#584cde'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <View style={styles.customImageView}>
    <Image style={{width:'65%',height:'80%',}}
          source={iconSplash}
          resizeMode='contain' />
    </View>
    
  </TouchableOpacity>
  
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? item.colorClicked : item.color;
    const color = item.id === selectedId ? 'black' : 'white';
  
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
      <Text style={styles.titleScreen}>Find your Desired Doctor!</Text>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical:8,
          marginHorizontal:16,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Search something here..."
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
      <Text style={{fontSize: 18,
                    marginVertical:8,
                    marginHorizontal:16,
                    alignItems: 'center',
                    justifyContent: 'center',}}>
          What are you looking for?</Text>
      <FlatList
        data={DATA}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={{marginTop:10,flex:3,}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{
         backgroundColor: '#fff',
         padding: 5,
         marginVertical:8,
         marginHorizontal:16,
         marginVertical: 10,
         borderRadius: 20,
         flex:1,
         alignItems:'center',justifyContent:'center',
         flexDirection:'row'
      }}>
        <View style={{flexDirection:'column', 
        flex:3,paddingTop:10,paddingBottom:10}}>
          <Text style = {styles.titleItem}>
                      Food Control
          </Text>
          <Text style = {styles.textFoodControlDes}>
                      Your food control Summary
          </Text>
          <Text style = {styles.textFoodControlType}>
                      🍎Fruit                   🥦Vegetables
          </Text>
          <View style={{
            flexDirection:'row', borderRadius:10,height:5,marginTop:10,
            marginHorizontal:16,
          }}>
            <View style={{flex: 3, backgroundColor:'#ec1c24'}}></View>
            <View style={{flex: 1, backgroundColor:'#0ed145'}}></View>
          </View>
        </View>
        <View style={{flex:0.01,height:'60%', backgroundColor:'#f4f4f6'}}>
        </View>
        <View style={{flex:1, flexDirection:'column',alignItems:'center',justifyContent:'center', }}>
          <Text style={styles.textFoodControlDay}>12</Text>
          <Text style={styles.textFoodControlDay2}>DAYS</Text>
        </View>
      </View>

      <Text style={{fontSize: 18,
                    marginVertical:8,
                    marginHorizontal:16,
                    alignItems: 'center',
                    justifyContent: 'center',}}>
          Chat with Top Doctors</Text>

      <View style={{
         backgroundColor: '#fff',
         padding: 10,
         marginVertical:8,
         marginHorizontal:16,
         marginVertical: 10,
         flex:1,
         borderRadius: 20,
         flexDirection:'row'
      }}>

      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#f4f5f9',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  item: {
    width:180,
    paddingLeft: 15,
    paddingTop:15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopRightRadius:50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  title: {
    fontSize: 17,
    width:'65%',
    alignItems: 'center',
    shadowColor: '#111',
    color:'#fff',
    justifyContent: 'center',
  },
  titleScreen: {
    fontSize: 30,
    width:'60%',
    marginVertical:8,
    marginHorizontal:16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleItem: {
    fontSize: 18,
    width:'60%',
    marginHorizontal:16,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFoodControlDay: {
    fontSize: 20,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFoodControlDay2: {
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFoodControlDes: {
    fontSize: 13,
    marginHorizontal:16,
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aca8be'
  },
  textFoodControlType: {
    fontSize: 13,
    marginHorizontal:16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImageView: {
    height: '100%',
    width:'100%',
    flexDirection:'column-reverse',
    alignItems:'flex-end',
    position:'absolute',
    bottom:0,
    right:0,
    marginRight:-15,
    },
});

export default App;