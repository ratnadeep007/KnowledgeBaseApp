import { Text, View, TouchableNativeFeedback, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import tw from 'twrnc';

export default function CardTech({ tech, navigation }) {
    const goToDetail = () => {
        navigation.navigate('Detail', { tech });
    }

    return (
        <TouchableNativeFeedback onPress={goToDetail}>
            <View style={tw`bg-blue-600 rounded-lg p-6 mb-3`}>
                <View style={tw`flex flex-row items-center`}>
                    {/* <Text>{tech.logo}</Text> */}
                    {
                        tech.logo && !tech.logo.includes('.svg') ? <Image
                            style={tw`h-10 w-10 bg-white rounded-full mr-3 mb-2`} 
                            source={tech.logo} /> : null
                    }
                    {
                        tech.logo && tech.logo.includes('.svg') ? <SvgUri
                            style={tw`h-2 w-2 bg-white rounded-full mr-3 mb-2`} 
                            uri={tech.logo} /> : null
                    }
                    <Text style={tw`text-xl font-bold text-white `}>{tech.name}</Text>
                    {/* <Text>{JSON.stringify(tech.expand.type)}</Text> */}
                    {
                        tech.expand.type.map(t => <Text style={tw`ml-3 bg-cyan-300 rounded-lg p-1`} key={Math.random()}>{t.name}</Text>)
                    }
                </View>
                {
                    tech.description.length > 200 ? 
                        <Text style={tw`text-white mt-1`}>{tech.description.split('\n')[0]}</Text> :
                        <Text style={tw`text-white mt-1`}>{tech.description}</Text>
                }
                <Text style={tw`mt-3 text-white font-semibold`}>Read More</Text>
            </View>
        </TouchableNativeFeedback>
    )
};
