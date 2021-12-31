import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-eva-icons';
import { ultraDark } from '../../assets/styles/colors';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import Login from '../../screens/Login';
import HomeScreen from '../home'
import Profile from '../../screens/Profile';
import Search from '../../screens/Search';
import CategoryDetails from '../../screens/CategorieDetails';
import OrderDetails from '../../screens/OrderDetails';
import Checkout from '../../screens/Checkout';
import ProductList from '../../screens/ProductList';
import { userAuthStateListener } from '../../redux/actions/auth';

const Stack = createNativeStackNavigator();
const colorTint = '#000'

export default function Route() {
    const currentUserObj = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
        console.log('current:', currentUserObj);
    }, [])

    if (!currentUserObj.loaded) return <Loading />;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {currentUserObj.currentUser == null ?
                    <>
                        <Stack.Screen
                            name="Main"
                            component={HomeScreen}
                            options={({ route, navigation }) => ({
                                headerTintColor: colorTint,
                                gestureEnabled: false,
                                headerLeft: null,
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                            })}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={({ route, navigation }) => ({
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            })}
                        />
                        <Stack.Screen
                            name="CategoryDetails"
                            component={CategoryDetails}
                            options={({ route, navigation }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="OrderDetails"
                            component={OrderDetails}
                            options={({ route, navigation }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="ProductList"
                            component={ProductList}
                            options={({ route, navigation }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="Checkout"
                            component={Checkout}
                            options={({ route, navigation }) => ({
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Group screenOptions={{ presentation: "modal" }}>
                            <Stack.Screen
                                name="Search"
                                component={Search}
                                options={({ route, navigation }) => ({
                                    headerTitle: () => <Logo />,
                                    headerBackTitleVisible: false,
                                    headerTintColor: colorTint,
                                    headerLeft: () => (
                                        <Icon
                                            onPress={() => navigation.goBack()}
                                            name="close-outline"
                                            width={32}
                                            height={32}
                                            fill={ultraDark}
                                        />
                                    )
                                })}
                            />
                        </Stack.Group>
                    </>
                    :
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={({ route, navigation }) => ({
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            })}
                        />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}