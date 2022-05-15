import React from 'react';
import { View ,Text} from 'react-native';
import styles from './Product.style'

const Product =(props)=>
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
export default Product;
