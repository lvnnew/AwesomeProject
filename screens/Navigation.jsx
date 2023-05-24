import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { FullScreen } from "./FullScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Главная" }}/>
        <Stack.Screen name="FullScreen" component={FullScreen} options={{ title: "Детали" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}