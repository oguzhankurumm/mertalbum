import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primary, ultraDark } from '../../assets/styles/colors';
import { Icon } from 'react-native-eva-icons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Campaigns from '../../screens/Campaigns';
import Orders from '../../screens/Orders';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    const iconSize = 32
    return (
        <Tab.Navigator
            shifting={true}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: primary,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: ultraDark,
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="home-outline" width={iconSize} height={iconSize} fill={focused ? primary : ultraDark} />
                            </View>
                        )
                    }

                    if (route.name === 'Campaigns') {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="award-outline" width={iconSize} height={iconSize} fill={focused ? primary : ultraDark} />
                            </View>
                        )
                    }

                    if (route.name === 'Orders') {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="cube-outline" width={iconSize} height={iconSize} fill={focused ? primary : ultraDark} />
                            </View>
                        )
                    }

                    if (route.name === 'Profile') {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="person-outline" width={iconSize} height={iconSize} fill={focused ? primary : ultraDark} />
                            </View>
                        )
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarLabel: 'Ana Sayfa' }} />
            <Tab.Screen name="Campaigns" component={Campaigns} options={{ headerShown: false, tabBarLabel: 'Kampanyalar' }} />
            <Tab.Screen name="Orders" component={Orders} options={{ headerShown: false, tabBarLabel: 'Siparişlerim' }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarLabel: 'Profilim' }} />
        </Tab.Navigator>
    );
}