import Login from "./src/screens/login";
import Home from "./src/screens/home";
import Perfil from "./src/screens/perfil";
import Registro from "./src/screens/registro";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesome5 } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={DrawerNavigate}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export const DrawerNavigate = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
                component={Home}
                options={{
                    drawerActiveTintColor: '#436453ff',
                    drawerActiveBackgroundColor: '#ffdab4',
                    drawerInactiveTintColor: '#ffdab4',
                    drawerStyle: {
                        backgroundColor: '#436453ff'
                    },
                    drawerIcon: ({focused}) => (
                        <FontAwesome5
                            name="home" 
                            size={24} 
                            color={focused ? '#436453ff' : '#ffdab4'} 
                        />
                    ),
                    headerStyle: { backgroundColor: '#436453ff' }, 
                    headerTintColor: '#ffdab4',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            />

            <Drawer.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    drawerActiveTintColor: '#436453ff',
                    drawerActiveBackgroundColor: '#ffdab4',
                    drawerInactiveTintColor: '#ffdab4',
                    drawerStyle: {
                        backgroundColor: '#436453ff'
                    },
                    drawerIcon: ({focused}) => (
                        <FontAwesome5
                            name="user-alt" 
                            size={24} 
                            color={focused ? '#436453ff' : '#ffdab4'} 
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}