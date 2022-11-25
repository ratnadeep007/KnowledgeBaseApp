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
        </View>
    )
}