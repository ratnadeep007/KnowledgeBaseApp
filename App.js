import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Pages/Home';
import Detail from './src/Pages/Detail';
import TechList from './src/Pages/TechList';
import AddTech from './src/Pages/AddTech';
import VisitSite from './src/Pages/VisitSite';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    //   <StatusBar style={tw`bg-green-100`} />
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
          />
          {/* <Stack.Navigator> */}
          <Stack.Screen 
            name="Detail" 
            component={Detail}
          />
          <Stack.Screen
            name="TechList"
            component={TechList}
          />
          <Stack.Screen
            name="AddTech"
            component={AddTech}
          />
          <Stack.Screen
            name="VisitSite"
            component={VisitSite}
          />
          {/* </Stack.Navigator> */}
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}
