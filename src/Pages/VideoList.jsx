import { useState, useEffect } from "react";
import { View, ScrollView, TextInput, Text } from 'react-native';
import tw from 'twrnc';
import PocketBase from 'pocketbase';

import CardVideo from "../Components/CardVideo";

export default function({ navigation }) {
    const [apiVideos, setApiVideos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      if (videos.length < 1) {
        getVideos();
      }
    }, [videos])

    const getVideos = async () => {
        const pb = new PocketBase('https://pocketbase-darklord.fly.dev');

        const records = await pb.collection('videos').getFullList(200, {
            expand: 'type',
            filter: 'tech = null'
        });
        setApiVideos(records); 
        setVideos(records);
    }

    const onChangeText = function (e) {
        const value = e;
        if (value === '' || !value) {
            setTechs(apiTechs);
            return;
        }
        const t = techs.filter(te => te.name.toLowerCase().includes(value));
        setTechs(t);
    }
    
    return (
        <View style={tw`bg-green-100 h-full w-full`}>
            <View style={tw`flex-row w-full my-3 items-center justify-center`}>
                <TextInput 
                    style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12`} 
                    placeholder="Search for project"
                    onChangeText={onChangeText} />
            </View>
            <ScrollView style={tw`w-full h-full flex-col p-3`} contentContainerStyle={tw`pb-3`}>
            {
                videos.map(video => <CardVideo key={video.id} video={video} />)
            }
            </ScrollView>
        </View>
    )
}