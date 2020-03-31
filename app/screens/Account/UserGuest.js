import React from 'react';
import {StyleSheet,ScrollView, View, Text, ActivityIndicator,Image} from 'react-native';
import {Button} from 'react-native-elements';

export default function UserGuest (){
    // const {text} = props;
    // console.log(props);
    return(
        <ScrollView style={styles.viewBody} centerContent={true}>
            <Image
                source={require("../../../assets/richglitch.png")}
                style={styles.image}
                resizemode="contain"
            />
            <Text style={styles.title}>
                Consulta tu perfil
            </Text>
            <Text style = {styles.description}>
                ¿Como describirías tu mejor restaurante? busca y visualiza a los mejores.
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Ver tu perfil"
                    onPress={() => console.log("hola")}
                />
            </View>
        </ScrollView>
    );
}


const styles= StyleSheet.create({
    viewBody : {
        marginLeft:30,
        marginRight:30,
    },
    image:{
        height:300,
        width:"100%",
        marginBottom:40,
    },
    title:{
         fontWeight:'bold',
         fontSize:19,
         marginBottom:10,
         textAlign:"center",
        //  color:"#00a680",
        //  textTransform:"uppercase",
        //  marginTop:10
    },
    description:{
         marginBottom:20,
         textAlign:"center",
        //  color:"#00a680",
        //  textTransform:"uppercase",
        //  marginTop:10
    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    },
    btnStyle:{
        backgroundColor:"#00a680"
    },
    btnContainer:{
        width:"70%"
    }
})