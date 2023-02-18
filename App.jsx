import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/Pages/Home';
import Detail from './src/Pages/Detail';
import TechList from './src/Pages/TechList';
import AddTech from './src/Pages/AddTech';
import VisitSite from './src/Pages/VisitSite';
import ArticleList from './src/Pages/ArticleList';
import VideoList from './src/Pages/VideoList';
import AIToolsList from './src/Pages/AIToolsList';
import LearnList from './src/Pages/LearnList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#DCFCE7' },
            activeTintColor: 'green',
          }}>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              title: "Knowledge Base" 
            }}
          />
          {/* <Stack.Navigator> */}
          <Stack.Screen 
            name="Detail" 
            component={Detail}
          />
          <Stack.Screen
            name="TechList"
            component={TechList}
            options={{
              title: "Technologies" 
            }}
          />
          <Stack.Screen
            name="AddTech"
            component={AddTech}
          />
          <Stack.Screen
            name="VisitSite"
            component={VisitSite}
            options={{
              title: "Website" 
            }}
          />
          <Stack.Screen
            name="ArticleList"
            component={ArticleList}
            options={{
              title: "Articles" 
            }}
          />
          <Stack.Screen
            name="VideoList"
            component={VideoList}
          />
          <Stack.Screen
            name="AIToolsList"
            component={AIToolsList}
            options={{
              title: "AI Tools" 
            }}
          />
          <Stack.Screen
            name="LearnList"
            component={LearnList}
            options={{
              title: "Learning Resources" 
            }}
          />
          {/* </Stack.Navigator> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
