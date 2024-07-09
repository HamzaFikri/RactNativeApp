import React,{ useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {
  const [stats, setStats] = useState([
    { text: 'Task', key: '1'},
    { text: 'Date', key: '2'},
    { text: 'Status', key: '3'},
    { text: 'Notes', key: '4'},
  ])
  return (
    <View style={styles.container}>
      <Header /> 
      
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={stats}
            renderItem={({ item }) => (
              // <Text>{item.text}</Text>
              <TodoItem  item={item}/>
            )}

          />

        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop:20
  }
});
