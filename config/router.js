import React from 'react';
import { createStackNavigator } from "react-navigation";
import Home from '../Home';
import ArticleDetails from '../src/components/ArticleDetails'


export const RootNavigator = () => {
    return createStackNavigator(
        {
            Home: {
                screen: Home
            },

            ArticleDetails: {
                screen: ArticleDetails
                
            }

        })
}