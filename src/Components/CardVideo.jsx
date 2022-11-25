import { View, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'twrnc';

export default function CardVedio({ video }) {
    return (
        <View 
            style={tw`bg-blue-500 rounded-lg p-3 mb-3`}
            key={video.id}>
            <YoutubePlayer
                height={230}
                videoId={video.url.split('=')[1]} />
            <Text style={tw`text-white font-semibold text-lg`}>{video.name}</Text>
            <View style={tw`flex-row mt-3`}>
            {
                video.expand && video.expand.type && video.expand.type.length ?
                    video.expand.type.map(t => <View style={tw`p-2 bg-cyan-300 rounded-lg`}>
                        <Text>{t.name}</Text>
                    </View>) : null
            }
            </View>
        </View>
    )
}