import tw from 'twrnc';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home({ navigation }) {

    const goToTechs = () => {
        navigation.navigate('TechList')
    }

    const goToArticles = () => {
        
    }

    const goToVideos = () => {
        
    }

    return (
      <SafeAreaView>
        <StatusBar backgroundColor="black" />
        <View style={tw`bg-green-100 h-full w-full flex-col px-6 items-center justify-center`}>
            <TouchableNativeFeedback onPress={goToTechs}>
                <View style={tw`px-6 py-6 bg-sky-300 rounded-lg w-full mb-3`}>
                    <Icon style={tw`text-center`} size={21} name="wrench" />
                    <Text style={tw`text-lg font-semibold text-center`}>Tech List</Text>
                    <Text style={tw`text-center`}>List of interesting techs to keep an eye on</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={goToArticles}>
                <View style={tw`px-6 py-6 bg-sky-300 rounded-lg w-full mb-3`}>
                    <Icon style={tw`text-center`} size={21} name="newspaper" />
                    <View style={tw`flex-row justify-center items-center`}>
                      <Text style={tw`text-lg font-semibold text-center mr-2`}>Articles</Text>
                      <Text style={tw`text-lg text-xs text-red-600 text-center`}>Coming Soon</Text>
                    </View>
                    <Text style={tw`text-center`}>Articles must read to improve your knwoledge</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={goToVideos}>
                <View style={tw`px-6 py-6 bg-sky-300 rounded-lg w-full mb-3`}>
                    <Icon style={tw`text-center`} size={21} name="youtube" />
                    <View style={tw`flex-row justify-center items-center`}>
                      <Text style={tw`text-lg font-semibold text-center mr-2`}>Videos</Text>
                      <Text style={tw`text-lg text-xs text-red-600 text-center`}>Coming Soon</Text>
                    </View>
                    <Text style={tw`text-center`}>Tech Talks, Tutorials, etc.</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
      </SafeAreaView>
    )
}
