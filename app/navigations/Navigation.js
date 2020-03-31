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
      NavigationOptions: () => ({
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tinColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tinColor}
          />
        )
      })
    },
    TopLists: {
        screen: TopListScreenStacks,
        NavigationOptions: () => ({
          tabBarLabel: "Top Restaurantes",
          tabBarIcon: ({ tinColor }) => (
            <Icon
              type="material-community"
              name="star-outline"
              size={22}
              color={tinColor}
            />
          )
        })
      },
      Search: {
          screen: SearchScreenStacks,
          NavigationOptions: () => ({
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
            NavigationOptions: () => ({
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
      activeTintColor: "#1B98E0"
    }
  }
);
 
export default createAppContainer(NavigationStacks);