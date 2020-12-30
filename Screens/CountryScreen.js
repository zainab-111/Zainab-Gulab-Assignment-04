import React from 'react'
import { StyleSheet,View,Text } from 'react-native';

const CountryScreen = ( {navigation} )=> {
    
    return (
    <View style={styles.container}> 
      <Text>Country Statistics on Covid-19</Text>
    </View>
    );
  }


const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
    

})

export default CountryScreen