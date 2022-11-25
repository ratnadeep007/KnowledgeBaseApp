import { View, TextInput, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

import CardArticle from '../Components/CardArticle';

export default function ArticleList({ navigation }) {
    const [apiArticles, setApiArticles] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      if (articles.length < 1) {
        getArticles();
      }
    }, [articles])
    
    const getArticles = async () => {
        const pb = new PocketBase('https://pocketbase-darklord.fly.dev');

        const records = await pb.collection('articles').getFullList(200, {
            expand: 'type'
        });
        console.log(records);
        setApiArticles(records);
        setArticles(records);
    }

    const onChangeText = function (a) {
        const value = a;
        if (value === '' || !value) {
            setArticles(apiArticles);
            return;
        }
        const t = techs.filter(te => te.name.toLowerCase().includes(value));
        setArticles(t);
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
                articles.map(article => <CardArticle key={article.id} article={article} navigation={navigation} />)
            }
            </ScrollView>
        </View>
    )
}