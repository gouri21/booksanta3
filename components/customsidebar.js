import React,{Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'
import db from '../config'
export default class CustomSidebar extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                    </View><View style={styles.logOutContainer}>
                        <TouchableOpacity style={styles.logOutButton} 
                        onPress={()=>{
                            this.props.navigation.navigate('Loginscreen')
                            firebase.auth().signOut()
                        }}><Text>logout</Text>

                        </TouchableOpacity>
                    </View>
                    </View>

        )
    }
}
var styles = StyleSheet.create(
    { container : { flex:1 }, drawerItemsContainer:{ flex:0.8 },
     logOutContainer : { flex:0.2, justifyContent:'flex-end', paddingBottom:30 },
      logOutButton : { height:30, width:'100%', justifyContent:'center', 
      padding:10 }, 
logOutText:{ fontSize: 30, fontWeight:'bold' } })