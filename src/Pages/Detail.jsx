import tw from 'twrnc';
import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from 'react';
import CardVedio from '../Components/CardVideo';
import CardArticle from '../Components/CardArticle';

export default function Detail({ route, navigation }) {
    const [isExpand, setIsExpand] = useState(false);
    const [isVideos, setisVideos] = useState(false);
    const [isArticles, setIsArticles] = useState(false);
    const [videos, setVideos] = useState([]);
    const [articles, setArticle] = useState([]);

    useEffect(() => {
      setStates();
    }, [route])

    const setStates = () => {
        if (route.params.tech.expand) {
            setIsExpand(true);
            console.log(route.params.tech.expand);
            if (route.params.tech.expand['videos(tech)'] && route.params.tech.expand['videos(tech)'].length) {
                console.log('videos true');
                setisVideos(true)
                setVideos(route.params.tech.expand['videos(tech)']);
            }
            if (route.params.tech.expand['articles(tech)'] && route.params.tech.expand['articles(tech)'].length) {
                console.log('articlesr true');
                setIsArticles(true);
                setArticle(route.params.tech.expand['articles(tech)']);
            }
        }
    }
    

    const openUrl = (uri) => {
        navigation.navigate('VisitSite', {
            uri
        })
    }
    
    return (
        <ScrollView contentContainerStyle={tw`grow`}>
            <View style={tw`bg-green-100 h-full w-full p-3`}>
                <View style={tw`bg-blue-600 rounded-lg p-6`}>
                    <View style={tw`flex-row items-center`}>
                        <Text style={tw`text-white text-2xl font-bold`}>{route.params.tech.name}</Text>
                        {
                            route.params.tech.open_source ? <View style={tw`bg-green-300 px-2 py-1 rounded-lg ml-2`}>
                                <Text style={tw`text-black`}>Open Source</Text>
                            </View> : null
                        }
                    </View>
                    <Text style={tw`text-white text-lg mt-3`}>{route.params.tech.description}</Text>
                    <View style={tw`flex-row mt-3`}>
                    {
                        route.params.tech.expand.type.map(t => <Text style={tw`mr-3 bg-cyan-300 rounded-lg p-2`} key={Math.random()}>{t.name}</Text>)
                    }
                    </View>
                    {
                        route.params.tech.github_url ? 
                            <TouchableWithoutFeedback onPress={e => openUrl(route.params.tech.github_url)}>
                                <View style={tw`flex-row items-center mt-2`}>
                                    <Icon name="link" color="white" size={15} style={tw`mr-2`} />
                                    <Text style={tw`text-white font-semibold underline`}>{route.params.tech.github_url}</Text>
                                </View>
                            </TouchableWithoutFeedback> : null
                    }
                    {
                        route.params.tech.product_url ?
                        <TouchableWithoutFeedback onPress={e => openUrl(route.params.tech.product_url)}>
                            <View style={tw`flex-row items-center mt-2`}>
                                <Icon name="link" color="white" size={15} style={tw`mr-2`} />
                                <Text style={tw`text-white font-semibold underline`}>{route.params.tech.product_url}</Text>
                            </View>
                        </TouchableWithoutFeedback> : null
                    }
                </View>

                <View style={tw`mt-3`}>
                    <Text style={tw`font-semibold text-lg mb-2`}>Articles</Text>
                    {
                        isExpand && isArticles ?
                            articles.map(article => <CardArticle key={article.id} article={article} navigation={navigation} />) :
                            <Text style={tw`text-center font-semibold mt-2 text-red-400`}>No article present for {route.params.tech.name}</Text>
                    } 
                </View>
                
                <View style={tw`mt-3`}>
                    <Text style={tw`font-semibold text-lg mb-2`}>Videos</Text>
                    {
                        isExpand && isVideos ?
                            videos.map(video => <CardVedio key={video.id} video={video} />)
                            : <Text style={tw`text-center font-semibold mt-2 text-red-400`}>No Video present for {route.params.tech.name}</Text>
                    }
                </View>
            </View>
        </ScrollView>
    )
}
