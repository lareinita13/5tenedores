import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import  {createBottomTabNavigator}  from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
 
import SearchStack  from "./SearchStack";
import FavoritesStack from "./FavoritesStack";
import AccountsStack from "./AccountsStack"; 
import TopRestaurantsStack from "./TopRestaurantsStack";
import RestaurantsStack from "./RestaurantsStack"; 

const Tabs  = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
            initialRouteName = "restaurants"
            tabBarOptions = {{

                inactiveTintColor: "#646464",
                activeTintColor : "#00a680",
            }}
            screenOptions = {({route})=> ({
                tabBarIcon : ({ color })=> screenOptions(route,color),
            })}
            >  
                <Tabs.Screen 
                name = "restaurants" 
                component = {RestaurantsStack}
                options ={{title:"Restaurantes"}}
                />
                 <Tabs.Screen 
                name = "search" 
                component = {SearchStack}
                options ={{title:"Buscador"}}
                />
                 <Tabs.Screen 
                name = "favoritos" 
                component = {FavoritesStack}
                options ={{title:"Favoritos"}}
                />
                 <Tabs.Screen 
                name = "toprestaurants" 
                component = {TopRestaurantsStack}
                options ={{title:"Top-5"}}
                />
                 <Tabs.Screen 
                name = "accounts" 
                component = {AccountsStack}
                options ={{title:"Cuenta"}}
                />
                 
            </Tabs.Navigator>
        </NavigationContainer>

);

}

function screenOptions (route,color){
    let iconName;

    switch (route.name) {
        case "restaurants":
            iconName =  "compass-outline";
            break;
        case "favoritos":
            iconName =  "heart-outline";
            break;
        case "search":
            iconName =  "compass-outline";
            break;
        case "toprestaurants":
                iconName =  "compass-outline";
                break;
        case "accounts":
                    iconName =  "compass-outline";
                    break;
    
        default:
            break;
    }
    return (
        <Icon type = "material-community" name = {iconName} size = {22} color = {color} />
    );

}