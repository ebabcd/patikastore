import { Colors } from "@/app-example/constants/theme";
import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import news_data from './news_data.json';
import NewsCard from "./components/NewsCard";

export default function Index() {
  return (
    <View style={styles.container}>


      <FlatList
        data={news_data}
        renderItem={({ item }) => <NewsCard news={item} />}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

})


