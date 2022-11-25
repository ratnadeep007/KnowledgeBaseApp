import { View, Text, TouchableNativeFeedback } from 'react-native';
import tw from 'twrnc';

export default function CardArticle({ article, navigation }) {
    const goToArticle = (uri) => {
        navigation.navigate('VisitSite', {
            uri
        });
    }

    return (
        <TouchableNativeFeedback onPress={e => goToArticle(article.url)}>
            <View style={tw`mb-3`}>
                <View style={tw`bg-blue-600 rounded-tl-lg rounded-tr-lg p-6`}>
                    <Text style={tw`text-xl font-bold text-white `}>{article.title}</Text>
                    <Text style={tw`text-white mt-1`}>{article.excrept}</Text>
                    {
                        article.expand && article.expand.type && article.expand.type.length ?
                            article.expand.type.map(t => <View style={tw`bg-cyan-300 p-1 rounded-lg`}>
                                <Text key={t.id}>{t.name}</Text>
                            </View>)
                            : null
                    }
                    {/* <View style={tw`flex-row mt-3`}>
                        {
                            article.expand.type.map(t => <View style={tw`bg-cyan-300 p-1 rounded-lg`}>
                                <Text key={t.id}>{t.name}</Text>
                            </View>)
                        }
                    </View> */}
                </View>
                <View style={tw`bg-blue-700 flex-row justify-center py-1 rounded-bl-lg rounded-br-lg`}>
                    <Text style={tw`text-white italic`}>Click on card to Read More</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}