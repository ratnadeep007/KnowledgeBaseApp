import { useState, useEffect } from "react";
import { View, ScrollView, TextInput, TouchableNativeFeedback, Text } from 'react-native';
import tw from 'twrnc';
import PocketBase from 'pocketbase';
import YoutubePlayer from 'react-native-youtube-iframe';

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
            expand: 'type'
        });
        console.log('videos', records);
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
                videos.map(video => <View 
                    style={tw`bg-blue-500 rounded-lg p-3`}
                    key={video.id}>
                    <YoutubePlayer
                        height={230}
                        videoId={video.url.split('=')[1]} />
                    <Text style={tw`text-white font-semibold text-lg`}>{video.name}</Text>
                </View>)
            }
            </ScrollView>
        </View>
    )
}