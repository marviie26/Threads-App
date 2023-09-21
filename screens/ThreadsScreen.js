import {
    
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    Button,
    Pressable,
  } from "react-native";
  import React, { useState, useContext } from "react";
  import { UserType } from "../UserContext";
  import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
  
  const ThreadsScreen = () => {
    const navigation = useNavigation()
    const { userId, setUserId } = useContext(UserType);
    const [content, setContent] = useState("");
    const handlePostSubmit = () => {
      const postData = {
        userId,
      };
  
      if (content) {
        postData.content = content;
      }
  
      axios
        .post("http://192.168.0.161:3000/create-post", postData)
        .then((response) => {
          setContent("");
        })
        .catch((error) => {
          console.log("error creating post", error);
        });
        
    };
    return (
      <SafeAreaView  style={{ padding: 10 }}>
        <Pressable onPress={()=> navigation.goBack()}>
          <Text>
          <AntDesign name="arrowleft" size={20} color="grey"  />
            <Text style={{marginLeft:10, color:"grey"}}> Back </Text>
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            marginTop:10
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
            }}
          />
  
          <Text>Marviie</Text>
        </View>
  
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <TextInput
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor={"black"}
            placeholder="Type your message..."
            multiline
          />
        </View>
  
        <View style={{ marginTop: 20 }} />
  
        <Button onPress={handlePostSubmit} title="Share Post"  />
      </SafeAreaView>
    );
  };
  
  export default ThreadsScreen;
  
  