import React,{useState,useEffect,useRef} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/Account/InfoUser';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/Loading';

export default function UserLogged (){
    const [userInfo,setUserInfo] = useState({});
    const [reloadData,setReloadData]=useState(false);
    const [isLoading,setIsLoading]=useState(false);
    const [textLoading,setTextLoading]=useState("");
    const toastRef = useRef();
    useEffect(() => {
       (async () =>{
           const user = await firebase.auth().currentUser;
           setUserInfo(user.providerData[0]);
       }) ();
       setReloadData(false);
    },[reloadData])

    return(
        <View style={styles.viewUserInfo}>
            <InfoUser setIsLoading={setIsLoading} setTextLoading={setTextLoading} toastRef={toastRef} userInfo={userInfo} setReloadData={setReloadData}/>
            <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Cerrar sesión"
                onPress={() => firebase.auth().signOut()}
            />
            <Toast ref={toastRef} position="center" opacity={0.8}/>
            <Loading text={textLoading} isVisible={isLoading}/>
        </View>
    );
}

const styles= StyleSheet.create({
   viewUserInfo:{
       alignItems:"center",
       justifyContent:"center",
   },
    btnStyle:{
        backgroundColor:"#1B98E0"
    },
    btnContainer:{
        marginTop:20,
        width:"95%"
    }
})