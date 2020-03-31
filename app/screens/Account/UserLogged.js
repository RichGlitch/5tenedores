import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as firebase from 'firebase';


export default function UserLogged (){
    // const {text} = props;
    // console.log(props);
    return(
        <View>
            <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Cerrar sesión"
                onPress={() => firebase.auth().signOut()}
            />
        </View>
    );
}

const styles= StyleSheet.create({
   
    btnStyle:{
        backgroundColor:"#1B98E0"
    },
    btnContainer:{
        marginTop:20,
        width:"95%"
    }
})