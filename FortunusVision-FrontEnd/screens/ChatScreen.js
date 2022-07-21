import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/colors";
import ExpertVoiceContainer from "../components/ExpertVoiceContainer";
import UserVoiceContainer from "../components/UserVoiceContainer";
import VoiceButton from "../components/VocieButton";
import { fetchInfo } from "../utils/firebase";
import { addCurrChats } from "../redux/users";
const ChatScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const props = route.params.props[0];
  useEffect(() => {
    navigation.setOptions({
      title: props,
    });
  }, []);
  const [data, setData] = useState([]);
  const chats = useSelector((state) => state.user.chats);
  const user_id = useSelector((state) => state.user.userId);
  const name = useSelector((state) => state.user.name);
  const thischat = useSelector((state) => state.user.curr_chats);
  let currChat = chats.filter((chat) => chat.name === props.name);
  const expert_id = route.params.props[1]
    ? route.params.props[1]
    : currChat[0].expert_id;

  useEffect(() => {
    async function fetchdata() {
      const res = await fetchInfo(user_id, expert_id);
      console.log(res);
      dispatch(addCurrChats(res));
      res && setData(res);
    }
    fetchdata();
  }, []);

  let item = thischat;
  function renderCardItem(itemData) {
    itemData = itemData.item;
    const CardItemProps = {
      name: name,
      date: itemData.date,
      time: itemData.time,
      sound: itemData.sound,
      duration: itemData.duration,
    };
    if (itemData.usertype === 0) {
      return (
        <View style={styles.buttonOuter}>
          <UserVoiceContainer {...CardItemProps} props={props} />
        </View>
      );
    }
    return (
      <View style={styles.buttonOuter}>
        <ExpertVoiceContainer props={props} {...CardItemProps} />
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <FlatList renderItem={renderCardItem} data={item} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.primary700,
        }}
      >
        <VoiceButton expert_id={expert_id} />
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    color: Colors.accent600,
  },
  date: {
    fontSize: 10,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceContainer: {
    backgroundColor: Colors.accent600,
    height: 69,
    width: 323,
    borderRadius: 10,
    marginTop: 8,
    justifyContent: "center",
  },
  expertContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  playButton: {
    marginHorizontal: 10,
  },
});
