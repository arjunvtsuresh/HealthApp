import { StyleSheet, View ,StatusBar ,Text , ScrollView, SectionList, ImageBackground} from 'react-native';
import ButtonElement from './components/ButtonElement';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';

export default function App() {
  return (
    <HomeStack/>
  );
}

