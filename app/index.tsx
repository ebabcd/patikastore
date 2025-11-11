import { Colors } from "@/app-example/constants/theme";
import { Text, View, StyleSheet, FlatList } from "react-native";
import React from "react";
import products_data from './product_data.json';
import Products from "./components/ProductsFile";




export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKASTORE</Text>
      <FlatList
      keyExtractor={(item) => item.id.toString()}
    data={products_data} 
    renderItem={({item}) => <Products product={item}/>}
    numColumns={2}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eceff1',
  },
  text:{
    color: 'purple',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  }


});

