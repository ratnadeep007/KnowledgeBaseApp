import tw from 'twrnc';
import { Text, View, TouchableNativeFeedback } from 'react-native';

export default function Home({ navigation }) {

    const goToTechs = () => {
        navigation.navigate('TechList')
    }

    return (
        <View style={tw`bg-green-100 h-full w-full flex-col items-center justify-center`}>
            <TouchableNativeFeedback onPress={goToTechs}>
                <View style={tw`px-6 py-6 bg-sky-300 rounded-lg`}>
                    <Text style={tw`text-lg font-semibold text-center`}>Tech List</Text>
                    <Text>List of interesting techs to keep an eye on</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
