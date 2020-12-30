import React from 'react'
import {StyleSheet, View,Button,Text } from 'react-native'

const SelectedCountry = ( {navigation} ) => {
    return (
    <View style={styles.container} >
      <Text>Selected Country Statistics </Text>
      <Button 
      title ="Back" 
      onPress={()=> navigation.goBack()}
      >
      </Button>
      <Button 
      title ="Go to Home Screen" 
      onPress={()=> navigation.popToTop()}
      >
      </Button>
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

export default SelectedCountry