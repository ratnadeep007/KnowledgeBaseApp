import { Text, View, TouchableNativeFeedback } from 'react-native';
import tw from 'twrnc';

export default function CardAITools({ tool, navigation }) {
    const goToWebsite = () => {
        navigation.navigate('VisitSite', { uri: tool.url });
    }

    return (
        <TouchableNativeFeedback onPress={goToWebsite}>
            <View style={tw`bg-blue-600 rounded-lg p-6 mb-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`text-xl font-bold text-white `}>{tool.name}</Text>
                </View>
                {
                    tool.description.length > 200 ? 
                        <Text style={tw`text-white mt-1`}>{tool.description.split('\n')[0]}</Text> :
                        <Text style={tw`text-white mt-1`}>{tool.description}</Text>
                }
                <Text style={tw`mt-3 text-white font-semibold`}>Go to website</Text>
            </View>
        </TouchableNativeFeedback>
    )
};
