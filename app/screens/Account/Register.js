import React,{useRef} from 'react';
import {StyleSheet,ScrollView, View, Text, ActivityIndicator,Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Account/RegisterForm';
import Toast from 'react-native-easy-toast';

export default function Register(){
    const toastRef= useRef();
    return(
        <KeyboardAwareScrollView style={styles.scroll}>
            <Image
                source={require("../../../assets/axolofAPPt.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef}/>
            </View>
            <Toast ref={toastRef} position="bottom" opacity={0.8}  fadeInDuration={750} positionValue={350}/>
        </KeyboardAwareScrollView>
    )
}


const styles= StyleSheet.create({
    viewForm : {
        marginLeft:40,
        marginRight:40,
        marginBottom:50
    },
    logo:{
        height:150,
        width:"100%",
        marginTop:20,
    },
    scroll:{
        //backgroundColor:"#eaea45"
    }
})