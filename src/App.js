import { StyleSheet, Text, View } from 'react-native';
import Product from './components/PatikaStore/Product';
import React from "react";


const App = () => {
 

  return (
  <View>
       <Product title='PatikaStore'></Product>
     
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'pink'
 }
});

export default App;

