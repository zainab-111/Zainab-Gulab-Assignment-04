import React from 'react';
import {StyleSheet, Text, View,Button, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import CountryScreen from './Screens/CountryScreen';
import WorldScreen from './Screens/WorldScreen';
import SelectedCountry from './Screens/SelectedCountry';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="World" 
    screenOptions={({navigation})=>({
      headerTitleAlign:'center',
      headerTintColor:'blue',
      headerStyle:{
        backgroundColor:'lightblue'
      },
      headerLeft: ()=> <View  style={{ paddingLeft:10 }} >
      <Ionicons 
      name="ios-menu" 
      size={35} 
      color="black"
      onPress={()=> navigation.openDrawer()}
      />
      </View>
    })}
    >
   
    <Stack.Screen 
    name ='World'
    component={WorldScreen}
    options={{
      title:'World Statistcs',
    }}
    /> 

    <Stack.Screen 
    name ='Country'
    component={CountryScreen}
    options={{
      title:'Country Wise Statistics',
      headerRight: ()=> <Button title='Edit'/>
    }}
    />
   

    <Stack.Screen 
    name ="Selected"
    component={SelectedCountry}
    options={{
      title:'Selected Country Statistics',
    }}
    />
    </Stack.Navigator>
    

  );
}
function MyDrawer (){
  return(
    <Drawer.Navigator
    openByDefault={true}
    drawerType="slide"
    drawerStyle={{
      width:200,
      backgroundColor:'lightpink',
      
    }}
    > 
      <Drawer.Screen 
      name ="World" 
      component={StackNavigator}
      options={{
        drawerLabel:"World",
        drawerIcon: ()=> <Ionicons name="globe" size={24} color="black" />
        
        

      }}
      />
      <Drawer.Screen
       name ="Country" 
       component={CountryScreen}
       options={{
         drawerLabel:"Country",
         drawerIcon: ()=> <Ionicons name="ios-home" size={24} color="green"/>
         
 
       }}
      />

    </Drawer.Navigator>
  );

}

export default function App() {
  return(
    <NavigationContainer>
    < MyDrawer />
    </NavigationContainer>
  );

}

