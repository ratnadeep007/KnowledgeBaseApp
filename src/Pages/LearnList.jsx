import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import { Text, View, TouchableNativeFeedback, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';

import CardAITools from "../Components/CardAITools";

export default function LearnList({ navigation }) {
    const [learnApi, setLearnApi] = useState([]);
    const [learn, setLearn] = useState([]);

    useEffect(() => {
        if (learn.length < 1) {
            getLern();
        }
    }, [learn]);

    const getLern = async () => {
        const pb = new PocketBase('https://pocketbase-darklord.fly.dev');

        const records = await pb.collection('learn').getFullList(200);
        console.log(records[0]);
        setLearn(records);
        setLearnApi(records);
    }

    const onChangeText = function (a) {
        const value = a;
        if (value === '' || !value) {
            setArticles(apiArticles);
            return;
        }
        const t = tools.filter(te => te.name.toLowerCase().includes(value));
        setTools(t);
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
                learn.map(tool => <CardAITools key={tool.id} tool={tool} navigation={navigation} />)
            }
            </ScrollView>
        </View>
    )
}