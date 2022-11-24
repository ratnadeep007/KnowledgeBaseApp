import tw from 'twrnc';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default function Detail({ route, navigation }) {
    const openUrl = (uri) => {
        navigation.navigate('VisitSite', {
            uri
        })
    }
    
    return (
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
                    route.params.tech.type.map(t => <Text style={tw`mr-3 bg-cyan-300 rounded-lg p-2`} key={Math.random()}>{t}</Text>)
                }
                </View>
                <TouchableWithoutFeedback onPress={e => openUrl(route.params.tech.github_url)}>
                    <Text style={tw`mt-3 text-white font-semibold underline`}>{route.params.tech.github_url}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={e => openUrl(route.params.tech.product_url)}>
                    <Text style={tw`mt-3 text-white font-semibold underline`}>{route.params.tech.product_url}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
