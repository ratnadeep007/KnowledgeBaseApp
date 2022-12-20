import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import tw from 'twrnc';
import { Text, View, ScrollView, TextInput, TouchableNativeFeedback, Image } from 'react-native';

import CardTech from '../Components/CardTech';

export default function({ navigation }) {
    const [apiTechs, setApiTechs] = useState([]);
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        if (techs.length < 1) { getTechs(); } 
    }, [techs])

    const getTechs = async () => {
        const pb = new PocketBase('https://pocketbase-darklord.fly.dev');

        const records = await pb.collection('techs').getFullList(200, {
            expand: 'type,articles(tech),videos(tech)'
        });
        console.log('record', records);
        setApiTechs(records); 
        setTechs(records);
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

    const navigatveToAdd = () => {
        navigation.navigate('AddTech');
    }

    return (
        <View style={tw`bg-green-100 h-full w-full`}>
            <View style={tw`flex-row w-full my-3 items-center justify-center`}>
                <TextInput 
                    style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12`} 
                    placeholder="Search for project"
                    onChangeText={onChangeText} />
                {/* <TouchableNativeFeedback onPress={navigatveToAdd}>
                    <View style={tw`bg-blue-300 p-2 text-white font-semibold rounded-lg`}>
                        <Text style={tw`font-semibold`}>Add</Text>
                    </View>
                </TouchableNativeFeedback> */}
            </View>
            <ScrollView style={tw`w-full h-full flex-col p-3`} contentContainerStyle={tw`pb-3`}>
            {
              techs.map(tech => <CardTech key={tech.id} tech={tech} navigation={navigation} />)
            }
          </ScrollView>
        </View>
    )
}
