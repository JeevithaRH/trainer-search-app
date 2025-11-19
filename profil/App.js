// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Profile Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }} // sample profile picture
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Shrinidhi 😎</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        React Native Learner | Coding Enthusiast 🚀
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Edit Profile")}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    borderColor: '#4caf50',
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});