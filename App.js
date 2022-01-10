import React, { useEffect } from "react";
import { StyleSheet, LogBox } from "react-native";

import { DrawerNavigator } from "./routes/ChooseKanjiDrawer";
import { kanjiArray } from "./routes/KanjiList";

export default function App() {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    kanjiArray.map(async (item) => {
      const value = await AsyncStorage.getItem("悪   ဆိုးသော");
      if (value == null) {
        await AsyncStorage.setItem(item.title, item.title);
      }
    });
  }, []);
  return <DrawerNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
