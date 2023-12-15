import { useState,useEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem';
import axios from "axios"

const URL = "https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=04ac2af1c2534b488bf3268791b030d5"
export default function App() {
  const [articles, setArticles] = useState([])
  
  const fetchArticles = async() => {
    try{
      const response = await axios.get(URL)
      setArticles(response.data.articles)

    }
    catch(error){
      console.error(error)
    }
    setArticles(dummyArticles)
  }

  useEffect(()=>{
    fetchArticles()
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

});
