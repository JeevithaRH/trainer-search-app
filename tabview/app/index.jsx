// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Home() {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Text>hiii,........welcom</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
// import { View, Text, FlatList, StyleSheet,ImageBackground } from 'react-native';

// const homeData = [
//   { id: '1', title: "Welcome", message: "Welcome to my app!" },
//   { id: '2', title: "News", message: "New features coming soon." },
//   { id: '3', title: "Tips", message: "Check out the Projects tab for ideas." },
//   { id: '4', title: "Updates", message: "Your profile has been updated successfully." },
//   { id: '5', title: "Reminder", message: "Don't forget to explore all tabs." },
// ];

// export default function Home() {
//   return (
//      <ImageBackground
//       source={{ uri: 'https://your-image-url.com/background.jpg' }} // or use require('./assets/bg.jpg')
//       style={styles.background}
//       resizeMode="cover"
//     >
//         <View style={styles.container}>
//             <Text style={styles.header}>Home</Text>
//          <FlatList
//             data={homeData}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <View style={styles.card}>
//                 <Text style={styles.cardTitle}>{item.title}</Text>
//                 <Text style={styles.cardMessage}>{item.message}</Text>
//             </View>
//             )}
//         />
//         </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15,backgroundColor:'#fb0505ff' },
//   card: { padding: 15, backgroundColor: '#ee03c7ff', borderRadius: 8, marginBottom: 10 },
//   cardTitle: { fontSize: 18, fontWeight: '600' },
//   cardMessage: { fontSize: 14, color: '#0fdb3bff', marginTop: 5 },
// });
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

const homeData = [
  { id: '1', title: "Welcome", message: "Welcome to my app!" },
  { id: '2', title: "News", message: "New features coming soon." },
  { id: '3', title: "Tips", message: "Check out the Projects tab for ideas." },
  { id: '4', title: "Updates", message: "Your profile has been updated successfully." },
  { id: '5', title: "Reminder", message: "Don't forget to explore all tabs." },
];

export default function Home() {
  return (
    <ImageBackground
      source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.oZIBPSBLVZIbeGGCitK7LQHaQD?w=1080&h=2340&rs=1&pid=ImgDetMain&o=7&rm=3' }} // or use require('./assets/bg.jpg')
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Home</Text>
        <FlatList
          data={homeData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMessage}>{item.message}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.8)', // optional: softens background image
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    backgroundColor: '#fff',
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
  card: {
    padding: 15,
    backgroundColor: '#d88bc4ff',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardMessage: {
    fontSize: 14,
    color: '#09ec3aff',
    marginTop: 5,
  },
});