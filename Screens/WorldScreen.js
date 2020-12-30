import React, {useEffect,useState} from 'react'
import { StyleSheet,View,Text} from 'react-native'; 
import axios from 'axios';


const WorldScreen = ({navigation}) => {
    const [confirm,setConfirm]=useState('');
    const [lastUpdate, setLastUpdate]=useState('');
    const [recovered,setRecovered]=useState('');
    const [critical,setCritical]=useState('');
    const [deaths,setDeaths]=useState('');
    const [country,setCountry]=useState('');
    let one ={
           "method": "GET",
           "url":"https://covid-19-data.p.rapidapi.com/totals",
           "headers": {
             "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
             "x-rapidapi-key":"1717f7bf2emsh8c6c64f635c8320p1b8be8jsndefbee7b711c",
             "useQueryString":true
           }
         }

    let two ="https://api.covid19api.com/summary"

    const requestOne = axios(one);
    const requestTwo = axios(two);
    
    axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        setConfirm(responseOne[0].confirmed);
        setRecovered(responseOne[0].recovered);
        setCritical(responseOne[0].critical);
        setDeaths(responseOne[0].deaths);
        setLastUpdate(responseOne[0].lastUpdate)
        setCountry(responseTwo[0].Date)
        console.log(responseOne);
        console.log(responseTwo);
        console.log(country)
      })
    )
    .catch(errors => {
      console.log(errors);
    });

    return (
        <View style={styles.container}>
          <View>
          <Text>Total World  Population: 7794798739</Text>
          </View>
          <View style={styles.v1}>
          <Text>Total Confirmed cases:   {confirm}</Text>
          <PercentageFunction value={confirm} />
          </View>    
          <View>
          <Text>Total Recovered cases:   {recovered}</Text>
          <PercentageFunction value={recovered} />
          </View>

          <View>
          <Text>Total Critical cases:    {critical}</Text>
          <PercentageFunction value={critical} />
          </View>

          <View>
          <Text>Total Deaths cases:    {deaths}</Text>
          <PercentageFunction value={deaths} />
          </View>
         <Text>Last Update Data: {lastUpdate} </Text>
         

            
        </View>
    );
}

function PercentageFunction(props){
  var percentage = ((props.value)/7794798739 *(100)).toFixed(2);
  console.log(percentage)

  return <Text>{percentage} %</Text>

}


const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    v1: {
      flexDirection:'row',
      alignItems:'center',
      padding:10
    }
    

})

export default WorldScreen