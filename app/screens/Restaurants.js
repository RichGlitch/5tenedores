import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function Restaurants(){
    return(
        <View>
            <Text>Estamos en restaurantes</Text>
            <Button 
                title="click" 
                icon={
                <Icon
                    type="material-community"
                    name="check-outline"
                    color="red"
                />
                }
            ></Button>
        </View>
    );
}