import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import Product from './components/PatikaStore/Product';


function App() {
  return (
    <View style={styles.container}>
      <Product title='Patika Store'></Product>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink'
  }
}
)
export default App;

