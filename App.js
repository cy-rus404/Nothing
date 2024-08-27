import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./assets/airpod.jpeg')}></Image>
      <Text style={styles.txt}>Shop this airpod pro for as low as $69.99</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt1}>Shop Now!!!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img:{
    justifyContent:"center",
    height:400,
    width:400,
    marginTop:100,
    alignSelf:'center'
  },
  txt:{
textAlign:"center",
fontSize:30,
marginTop:50
}, 
  btn:{
    backgroundColor:"#007bff",
    padding:15,
    borderRadius:9,
    alignSelf:"center",
    marginTop:190,

  }
});
