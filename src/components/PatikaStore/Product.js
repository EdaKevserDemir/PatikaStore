import React from 'react';
import { View ,Text,TextInput} from 'react-native';
import styles from './Product.style'


const Product =(props)=>
{ const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
   
        </View>
    );
};
export default Product;
