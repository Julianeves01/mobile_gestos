import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Julia';
import { Ionicons } from '@expo/vector-icons'; 
import NewPage from '../screens/NewPage';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            headerTitle: 'Página Inicial',
            headerStyle: { backgroundColor: 'white',
                height: 100,
            },
            headerTintColor: "purple",
            headerTitleStyle: {
                fontSize: 30,
            },
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: "white",
                borderRadius: 50,
                height: 70,
                position: 'absolute',
                margin: 15,
            },
            tabBarItemStyle: {
                marginHorizontal: 5,
            },
            tabBarLabelStyle: {
                fontSize: 16,
            },
            tabBarIconStyle: {
                marginTop: 5,
                marginBottom: 5,
            },
            tabBarActiveTintColor: "pink",
            tabBarInactiveTintColor: "pink",
        }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="NewPage" 
                component={NewPage} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
