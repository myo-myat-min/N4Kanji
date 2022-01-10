import React, { useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, Input } from "native-base";
import Svg, { Circle } from "react-native-svg";
import LottieView from "lottie-react-native";

import { titleComCollection } from "./KanjiList";

const dimension = Dimensions.get("window");
export var tempHeartedData = [];

let searchBoxAnimate = new Animated.Value(0);

const { Navigator, Screen } = createDrawerNavigator();

export let heartedDataReciever = (item) => {
  if (Array.isArray(item)) {
    tempHeartedData = item;
  } else {
    tempHeartedData.push(item);
  }
};

export const DrawerNavigateScreen = () => {
  let [selectedTitle, setSelectedTitle] = useState("");
  let [isColorHS, setColorHS] = useState(false);

  let heartShape = useRef(null);
  let inputRef = useRef(null);

  const searchTextFilter = (text) => {
    if (text != null) {
      setSelectedTitle(text);
    }
  };
  return (
    <Navigator
      drawerContent={(props) => {
        const { state, ...rest } = props;
        const newState = { ...state };
        newState.routes = newState.routes.filter((item) =>
          item.name.includes(selectedTitle)
        );

        return (
          <View style={{ flex: 1 }}>
            <View style={{ height: 40, backgroundColor: "#abf7ff" }} />
            <View style={styles.header}>
              <Svg width="50" height="50">
                <Circle
                  cx="25"
                  cy="25"
                  r="17"
                  stroke="#bf00ff"
                  fill="transparent"
                />
                <Text style={styles.watermark}>;M;</Text>
              </Svg>
              <Text style={styles.title}>Kanji-N4</Text>
              <Button
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  width: 80,
                  alignSelf: "center",
                  marginLeft: 60,
                }}
                rounded
                onPress={() => props.navigation.navigate("🖋🖋")}
              >
                <Text style={styles.tryText}>Draw🖋</Text>
              </Button>
            </View>
            <View style={styles.searchHeartContainer}>
              <Animated.View
                style={[
                  styles.searchBarContainer,
                  {
                    transform: [{ translateY: searchBoxAnimate }],
                    opacity: searchBoxAnimate.interpolate({
                      inputRange: [-50, -20, 0],
                      outputRange: [0, 0.5, 1],
                    }),
                  },
                ]}
              >
                <Input
                  ref={inputRef}
                  style={styles.searchBox}
                  placeholder="Search"
                  onChangeText={(text) => searchTextFilter(text)}
                />
              </Animated.View>
              <TouchableWithoutFeedback
                onPress={() => {
                  if (isColorHS) {
                    heartShape.current.setNativeProps({ progress: 0 });
                    setColorHS(false);
                  } else {
                    heartShape.current.play();
                    setColorHS(true);
                  }
                }}
              >
                <LottieView
                  ref={heartShape}
                  source={require("../assets/heartshape.json")}
                  loop={false}
                  style={[styles.heartShape, { marginLeft: 0, width: 50 }]}
                />
              </TouchableWithoutFeedback>
            </View>
            <DrawerContentScrollView
              {...props}
              onScrollBeginDrag={() => {
                Animated.timing(searchBoxAnimate, {
                  toValue: -50,
                  duration: 500,
                  useNativeDriver: true,
                }).start();
              }}
              onScrollEndDrag={() => {
                Animated.timing(searchBoxAnimate, {
                  toValue: 0,
                  duration: 500,
                  useNativeDriver: true,
                }).start();
              }}
              onScroll={(event) => {
                Keyboard.dismiss();
              }}
            >
              <DrawerItemList state={newState} {...rest} />
            </DrawerContentScrollView>
          </View>
        );
      }}
      drawerContentOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      {isColorHS == false || tempHeartedData.length == 0
        ? titleComCollection().map((item, index) => (
            <Screen key={index} name={item.title} component={item.component} />
          ))
        : tempHeartedData.map((item, index) => (
            <Screen key={index} name={item.title} component={item.component} />
          ))}
    </Navigator>
  );
};

export const DrawerNavigator = () => (
  <NavigationContainer>
    <DrawerNavigateScreen />
  </NavigationContainer>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#00fbff",
    height: 65,
    padding: 5,
  },
  title: {
    color: "#00494a",
    fontSize: 18,
    fontWeight: "bold",
  },
  watermark: {
    color: "#bf00ff",
    fontSize: 15,
    top: 15,
    left: 15,
  },
  tryButton: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tryText: {
    fontSize: 15,
    color: "#616161",
  },
  image: {
    width: "98%",
    height: "98%",
  },
  imageContainer: {
    backgroundColor: "#bfbfbf",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: 30,
  },
  notchView: {
    height: 40,
    backgroundColor: "#abf7ff",
  },
  descriptionContainer: {
    width: "90%",
    height: dimension.height - 350,
    backgroundColor: "#abf7ff",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 5,
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  desTitleContainer: {
    flex: 0.6,
    // backgroundColor: "lime",
    alignItems: "flex-end",
  },
  desTitleStyle: {
    marginBottom: 12,
    marginRight: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#00494a",
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: "cyan",
  },
  desContentStyle: {
    marginTop: 2,
    marginBottom: 12,
    marginLeft: 15,
    fontWeight: "normal",
    fontSize: 17,
    color: "#000",
  },
  searchHeartContainer: {
    flexDirection: "row",
  },
  searchBarContainer: {
    width: "80%",
    height: 50,
    // backgroundColor: "lime",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchBox: {
    borderWidth: 2,
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderColor: "#00fbff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: "red",
  },
  heartShape: {
    marginLeft: dimension.width / 2 - 20,
    transform: [{ scale: 0.75 }],
  },
});
