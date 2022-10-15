import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

import TodoList from './src/components/TodoList';

const App = () => (
  <View>
    <TodoList />
  </View>
);

export default App;
