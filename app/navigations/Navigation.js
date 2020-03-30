import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
 
import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      defaultNavigationOptions: ({navigation }) => ({
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({focused }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={focused}
          />
        )
      })
    },
    TopLists: {
        screen: TopListScreenStacks,
        defaultNavigationOptions: () => ({
          tabBarLabel: "Top Restaurantes",
          tabBarIcon: ({focused }) => (
            <Icon
              
              type="material-community"
                    name="check-outline"
                    color="red"
            />
          )
        })
      },
      Search: {
          screen: SearchScreenStacks,
          defaultNavigationOptions: () => ({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tinColor }) => (
              <Icon
                type="material-community"
                name="magnify"
                size={22}
                color={tinColor}
              />
            )
          })
        },
        Account: {
            screen: AccountScreenStacks,
            defaultNavigationOptions: () => ({
              tabBarLabel: "Buscar",
              tabBarIcon: ({ tinColor }) => (
                <Icon
                  type="material-community"
                  name="home-outline"
                  size={22}
                  color={tinColor}
                />
              )
            })
          }
  }
  ,
  {
    initialRouteName: "Restaurants",
    order: ["Restaurants","TopLists","Search","Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);
 
export default createAppContainer(NavigationStacks);