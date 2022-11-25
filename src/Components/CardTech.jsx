import { Text, View, TouchableNativeFeedback } from 'react-native';
import tw from 'twrnc';

export default function CardTech({ tech, navigation }) {
    const goToDetail = () => {
        navigation.navigate('Detail', { tech });
    }

    return (
        <TouchableNativeFeedback onPress={goToDetail}>
            <View style={tw`bg-blue-600 rounded-lg p-6 mb-3`}>
                <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-xl font-bold text-white `}>{tech.name}</Text>
                    {/* <Text>{JSON.stringify(tech.expand.type)}</Text> */}
                    {
                        tech.expand.type.map(t => <Text style={tw`ml-3 bg-cyan-300 rounded-lg p-1`} key={Math.random()}>{t.name}</Text>)
                    }
                </View>
                <Text style={tw`text-white mt-1`}>{tech.description.split('\n')[0]}</Text>
                <Text style={tw`mt-3 text-white font-semibold`}>Read More</Text>
            </View>
        </TouchableNativeFeedback>
    )
};
