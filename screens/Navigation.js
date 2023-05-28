import { View,Text,StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {MaterialCommunityIcons}from 'react-native-vector-icons';
import Calls from "./Screens/Calls";
import Chat from "./Screens/Chat";
import Status from "./Screens/Status";
import Community from "./Screens/Community";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="chat"
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarIndicatorStyle:{
                    backgroundColor:'white'
                },
                tabBarLabelStyle:{
                    fontWeight:'bold'
                },
                tabBarStyle:{
                    backgroundColor:'#0e806a'
                }
            }}
        >
            <Tab.Sreen
                name = 'Community'
                component = {Community}
                options={{
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="account-group" size={24} color={color}/>
                    ),
                    tabBarLabelStyle: styles.tabBLable
                }}
            />
            <Tab.Sreen
                name = 'Chats'
                component = {Chat}
            />
            <Tab.Sreen
                name = 'Status'
                component = {Status}
            />
            <Tab.Sreen
                name = 'Calls'
                component = {Calls}
            />
        </Tab.Navigator>
    )

}

export default Navigation

const styles = StyleSheet.create({
    tabBLable:{
       display:'none' 
    }
  });
  