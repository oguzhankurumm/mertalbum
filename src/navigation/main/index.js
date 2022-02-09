import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-eva-icons';
import { ultraDark, white } from '../../assets/styles/colors';
import { userAuthStateListener } from '../../redux/actions/auth';

//assets and pages below
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import Login from '../../screens/Login';
import HomeScreen from '../home';
import Profile from '../../screens/Profile';
import Search from '../../screens/Search';
import OrderDetails from '../../screens/OrderDetails';
import Orders from '../../screens/Orders';
import Settings from '../../screens/Settings';
import Language from '../../screens/Language';
import Addresses from '../../screens/Addresses';
import CategorieDetails from '../../screens/CategorieDetails';
import ProductDetails from '../../screens/ProductDetails';
import SliderDetails from '../../screens/SliderDetails';
import CampaignDetails from '../../screens/CampaignDetails';
import AddressDetails from '../../screens/AddressDetails';
import ChangePassword from '../../screens/ChangePassword';

const Stack = createNativeStackNavigator();
const colorTint = '#000'

const Route = () => {
    const currentUserObj = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])

    if (!currentUserObj.loaded) return <Loading />;

    const HeaderBackButton = ({ navigation }) => (
        <Pressable
            onPress={() => navigation.goBack()}
            style={{
                padding: 10,
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: 8
            }}
        >
            <Icon
                name="arrow-ios-back"
                width={24}
                height={24}
                fill={colorTint}
            />
        </Pressable>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {currentUserObj.currentUser == null ?
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            }}
                        />
                    </>
                    :
                    <>
                        <Stack.Screen
                            name="Main"
                            component={HomeScreen}
                            options={{
                                headerTintColor: colorTint,
                                gestureEnabled: false,
                                headerLeft: null,
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                            }}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={{
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            }}
                        />
                        <Stack.Screen
                            name="Orders"
                            component={Orders}
                            options={{
                                headerTitle: "Siparişlerim",
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            }}
                        />
                        <Stack.Screen
                            name="OrderDetails"
                            component={OrderDetails}
                            options={({ route }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="Addresses"
                            component={Addresses}
                            options={{
                                headerTitle: "Adreslerim",
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            }}
                        />
                        <Stack.Screen
                            name="AddressDetails"
                            component={AddressDetails}
                            options={({ route }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={Settings}
                            options={{
                                headerTitle: "Hesap Ayarları",
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            }}
                        />
                        <Stack.Screen
                            name="ChangePassword"
                            component={ChangePassword}
                            options={{
                                headerTitle: "Parola Değiştir",
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            }}
                        />
                        <Stack.Group screenOptions={{ presentation: "modal" }}>
                            <Stack.Screen
                                name="Language"
                                component={Language}
                                options={({ navigation }) => ({
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
                        <Stack.Screen
                            name="CategorieDetails"
                            component={CategorieDetails}
                            options={({ route }) => ({
                                headerTitle: route.params.title,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="SliderDetails"
                            component={SliderDetails}
                            options={({ route }) => ({
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            })}
                        />
                        <Stack.Screen
                            name="ProductDetails"
                            component={ProductDetails}
                            options={({ navigation }) => ({
                                headerTransparent: false,
                                headerTitle: "Ürün Detayları",
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint,
                            })}
                        />
                        <Stack.Screen
                            name="CampaignDetails"
                            component={CampaignDetails}
                            options={({ route }) => ({
                                headerTitle: () => <Logo />,
                                headerBackTitleVisible: false,
                                headerTintColor: colorTint
                            })}
                        />
                        <Stack.Group screenOptions={{ presentation: "modal" }}>
                            <Stack.Screen
                                name="Search"
                                component={Search}
                                options={({ navigation }) => ({
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
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;