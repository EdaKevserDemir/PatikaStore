import React from 'react';
import { View ,Text,TextInput} from 'react-native';
import styles from './Product.style'


const Product =(props)=>
{ const [text, onChangeText] = React.useState(null);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Search area'
       
      />
     
   
        </View>
    );
};
export default Product;
