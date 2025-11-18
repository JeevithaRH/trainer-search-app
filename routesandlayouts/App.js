//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
  //return (
    //<View style={styles.container}>
      {/* <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      <StatusBar style="auto" /> */}
       
    //</View>
  //);
//}

//const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#0baff0ff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  //  bigBlue: {
  //   color: 'blue',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  // },
  // red: {
  //   color: 'red',
  // },
  
//});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://tse1.mm.bing.net/th/id/OIP.9FIiKATaQ0tNuMP3kjjKOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' }}
        style={styles.profileImage}
      />
      <Button
       onPress={() => {
       console.log('You tapped the button!');
       }}
       title="Press Me"
      />
      <Text style={styles.name}>Jeevitha r h</Text>
      <Text style={styles.bio}>Passionate developer and butterflly lover. Always learning and building cool stuff!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0baff0ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});