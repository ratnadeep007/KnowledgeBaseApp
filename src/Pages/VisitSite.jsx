import { WebView } from 'react-native-webview';

export default function VisitSite({ route }) {
    return (
        <WebView source={{ uri: route.params.uri }} />
    );
}
