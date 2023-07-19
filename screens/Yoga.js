
import React from 'react'
import { View, Text, ScrollView ,ActivityIndicator, StyleSheet} from 'react-native'
import InputCard from '../components/InpurCard'
import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'


function Yoga() {
    const [data , setData] = useState(null);
    const [imagedata , setImagedata] = useState([]);
    const [posename , setPosename] = useState([]);
    const [posedesc , setPosedesc] = useState([]);
    const [isLoading , setLoading]  = useState(true);

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        try{
            const response = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses',{});
            if(!response.ok){
                throw new Error(`HTTP ERROR : ${response.status}`);
            }
            const fetchedData = await response.json();
            const imageurls = [];
            const name = [];
            const desc = [];
            for(let i =0  ; i < 10 ; i++){
                imageurls.push(fetchedData[i].url_png);
                name.push(fetchedData[i].sanskrit_name_adapted);
                desc.push(fetchedData[i].pose_description);
            }
            setData(data);
            setImagedata(imageurls);
            setPosename(name);
            setPosedesc(desc);
            setLoading(false);
        }
        catch(error){
            console.log('Couldnt Fetch data');
        }
    
    };


  return (
    <View>
        <ScrollView style={styles.container}>
        	<ActivityIndicator size="large" animating={isLoading}/>
            <Card Imageuri={imagedata[0]} text={posename[0]} desc={posedesc[0]}/>
            <Card Imageuri={imagedata[1]} text={posename[1]} desc={posedesc[1]}/>
            <Card Imageuri={imagedata[2]} text={posename[2]} desc={posedesc[2]}/>
            <Card Imageuri={imagedata[3]} text={posename[3]} desc={posedesc[3]}/>
            <Card Imageuri={imagedata[4]} text={posename[4]} desc={posedesc[4]}/>
            <Card Imageuri={imagedata[5]} text={posename[5]} desc={posedesc[5]}/>
            <Card Imageuri={imagedata[6]} text={posename[6]} desc={posedesc[6]}/>
            <Card Imageuri={imagedata[7]} text={posename[7]} desc={posedesc[7]}/>
            <Card Imageuri={imagedata[8]} text={posename[8]} desc={posedesc[8]}/>
            <Card Imageuri={imagedata[9]} text={posename[9]} desc={posedesc[9]}/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    flex:1,
})
export default Yoga;
