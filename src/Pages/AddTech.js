import { View, Text, TextInput, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import tw from 'twrnc';
import Checkbox from 'expo-checkbox';
import { FlatGrid } from 'react-native-super-grid';
import { useState, useRef, useReducer } from 'react';
import PocketBase from 'pocketbase';

const selectItems = [
    {
        id: '1',
        name: 'cloud',
        selected: false
    },
    {
        id: '2',
        name: 'serverless',
        selected: false
    },
    {
        id: '3',
        name: 'language',
        selected: false
    },
    {
        id: '4',
        name: 'low-code',
        selected: false
    },
    {
        id: '5',
        name: 'firebase',
        selected: false
    },
    {
        id: '6',
        name: 'ui',
        selected: false
    },
    {
        id: '7',
        name: 'frontend',
        selected: false
    },
    {
        id: '8',
        name: 'ml/ai',
        selected: false
    },
    {
        id: '9',
        name: 'web framework',
        selected: false
    },
    {
        id: '10',
        name: 'tools',
        selected: false
    },
    {
        id: '11',
        name: 'ci/cd',
        selected: false
    },
    {
        id: '12',
        name: 'database',
        selected: false
    }
]

// cloud, serverless, language, low-code, firebase, ui, frontend, backend, ml/ai, web framework, tools, ci/cd, database

export default function ({ navigation }) {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [githubUrl, setGithubUrl] = useState();
    const [productUrl, setProductUrl] = useState();
    const [tags, setTags] = useState();
    const [isOpenSource, setIsOpenSource] = useState();
    const [tagItems, setTagItems] = useState(selectItems);
    const gridRef = useRef(null);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    const changeOpenSource = () => {
        setIsOpenSource(!isOpenSource);
    }

    const setTagsFromCheckbox = (item) => {
        const tags = tagItems;
        tags.map(tag => {
            if (tag.id === item.id) tag.selected = !tag.selected;
        });
        setTagItems(tags);
        forceUpdate();
    }

    const onSubmit = async () => {
        const dataToSend = {
            "name": name,
            "github_url": githubUrl,
            "product_url": productUrl,
            "description": description,
            "type": [],
            "open_source": isOpenSource,
            "logo": ""
        };
        let types = [];
        tagItems.forEach(item => item.selected === true ? types.push(item.name) : null);
        dataToSend.type = types;

        const pb = new PocketBase('https://pocketbase-darklord.fly.dev');
        try {
            const record = await pb.collection('techs').create(dataToSend);
            setTagItems(selectItems);
            ToastAndroid.show('Successfull added', ToastAndroid.SHORT);
            navigation.navigate('TechList');
        } catch (e) {
            ToastAndroid.show('Failed to add', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={tw`bg-green-100 w-full h-full flex-col items-center justify-center`}>
            <TextInput 
                style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12 mb-3 mt-3`} 
                placeholder="Project name"
                value={name}
                onChangeText={text => setName(text)} />
            <TextInput 
                style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12 mb-3`} 
                placeholder="Github URL"
                value={githubUrl}
                onChangeText={text => setGithubUrl(text)} />
            <TextInput 
                style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12 mb-3`} 
                placeholder="Product URL"
                value={productUrl}
                onChangeText={text => setProductUrl(text)} />
            <TextInput 
                style={tw`mr-1 px-3 py-1 rounded-lg bg-green-100 border-2 w-10/12 mb-3`} 
                placeholder="Project Description"
                value={description}
                onChangeText={text => setDescription(text)} />
            <View style={tw`flex-row m-2`}>
                <Checkbox value={isOpenSource} onValueChange={changeOpenSource} style={tw`mr-1`} />
                <Text style={tw`font-semibold`}>Is Open Source?</Text>
            </View>
            <Text style={tw`mt-3 font-semibold text-lg`}>Select a tag for this project</Text>
            <FlatGrid
                data={tagItems}
                ref={gridRef}
                maxHeight={190}
                renderItem={({item}) => (
                <View style={tw`flex-row m-2`}>
                    <Checkbox onValueChange={e => setTagsFromCheckbox(item)} value={item.selected} style={tw`mr-1`} />
                    <Text style={tw`font-semibold`}>{item.name}</Text>
                </View>)}
            />
            <View style={tw`flex-row mt-3`}>
                <TouchableNativeFeedback onPress={onSubmit}>
                    <View style={tw`bg-blue-300 p-3 rounded-lg font-semibold mr-3`}>
                        <Text>Submit</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={tw`bg-red-300 p-3 rounded-lg font-semibold`}>
                        <Text>Reset</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}