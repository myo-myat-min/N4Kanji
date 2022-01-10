import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  styles,
  tempHeartedData,
  heartedDataReciever,
} from "../routes/ChooseKanjiDrawer";
import { titleComCollection } from "../routes/KanjiList";

export const meaning = "Meaning:";
export const onyomi = "Onyomi:";
export const kunyomi = "Kunyomi:";
export const strokeCount = "Stroke Count:";
export const vocabulary = "Vocabulary:";

export const meaningTab = "\t\t\t\t\t\t\t\t\t\t";
export const onyomiTab = "\t\t\t\t\t\t\t\t\t\t\t";
export const kunyomiTab = "\t\t\t\t\t\t\t\t\t\t";
export const strokeCountTab = "\t\t\t\t\t";
export const vocabularyTab = "\t\t\t\t\t\t\t";

export const MenuButtonComponent = ({ navigation }) => (
  <View>
    <Button
      transparent
      style={{ alignSelf: "center" }}
      onPress={() => navigation.openDrawer()}
    >
      <Ionicons name="menu" size={35} color="#00494a" />
    </Button>
  </View>
);

export const LottieViewForAll = ({ filterKanjiToAppend, navigation }) => {
  let heartShape = useRef(null);
  let [isColorHS, setColorHS] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isColorHS) {
          heartShape.current.setNativeProps({ progress: 0 });
          setColorHS(false);
          titleComCollection()
            .filter((item) => item.title.includes(filterKanjiToAppend))
            .map(async (item) => {
              navigation.setOptions({ title: item.title });
              await AsyncStorage.setItem(item.title, item.title);
              // const value = await AsyncStorage.getItem(item.title);
              // console.log(value, " After Un-hearted");
              if (tempHeartedData.length != 0) {
                heartedDataReciever(
                  tempHeartedData.filter(
                    (heartedItem) => heartedItem.title != item.title
                  )
                );
              }
            });
        } else {
          heartShape.current.play();
          setColorHS(true);
          titleComCollection()
            .filter((item) => item.title.includes(filterKanjiToAppend))
            .map(async (item) => {
              navigation.setOptions({ title: item.title.concat("   ❤") });
              await AsyncStorage.setItem(item.title, item.title.concat("   ❤"));
              // const value = await AsyncStorage.getItem(item.title);
              // console.log(value, " After Hearted");
              heartedDataReciever(item);
            });
        }
      }}
    >
      <LottieView
        ref={heartShape}
        source={require("../assets/heartshape.json")}
        loop={false}
        style={{ ...styles.heartShape, transform: [{ scale: 0.8 }] }}
      />
    </TouchableWithoutFeedback>
  );
};

export const Bad = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>悪{"\t\t"}ဆိုးသော</Text>
      <LottieViewForAll filterKanjiToAppend="悪" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Bad.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဆိုးသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>アク (aku)、オ (o)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>わる (waru)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>11</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          悪い（わるい）(waru i) (ဆိုးသော){"\n"}最悪（さいあく）(sai aku)
          (အဆိုးဆုံး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Dark = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        暗{"\t\t"}မှောင်သော
      </Text>
      <LottieViewForAll filterKanjiToAppend="暗" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Dark.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မှောင်သော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>アン (an)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>くら (kura)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>13</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          暗い（くらい）(kura i) (မှောင်သော){"\n"}暗室（あんしつ ）(an shitsu)
          (မှောင်သောအခန်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Medicine = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>医{"\t\t"}ဆေးဝါး</Text>
      <LottieViewForAll filterKanjiToAppend="医" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Medicine.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဆေးဝါး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>イ (i)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>7</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          医者（いしゃ）(i sha) (ဆရာဝန်){"\n"}歯医者（はいしゃ）(ha i sha)
          (သွားဆရာဝန်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Mind = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        意{"\t\t"}ထင်မြင်ချက်
      </Text>
      <LottieViewForAll filterKanjiToAppend="意" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Mind.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ထင်မြင်ချက်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>イ (i)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>13</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          意見 （いけん）(i ken) (ထင်မြင်ချက်){"\n"}意味（いみ）(i mi)
          (အဓိပ္ပါယ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Prefix = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>以{"\t\t"}</Text>
      <LottieViewForAll filterKanjiToAppend="以" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Prefix.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>い (i)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>もっ (mot)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>5</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          以上（いじょう）(i jou) (ပိုသော){"\n"}以下（いか）(i ka) (လျော့သော)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Pull = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>引{"\t\t"}ဆွဲသည်</Text>
      <LottieViewForAll filterKanjiToAppend="引" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <LottieViewForAll filterKanjiToAppend="引" navigation={navigation} />
      <Image
        source={require("../assets/N4Kanji/Pull.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဆွဲသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>イン (in)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ひ (hi)​</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>4</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          引く（ひく）(hi ku) (ဆွဲသည်){"\n"}引力（いんりょく）(in ryoku)
          (ဆွဲအား){"\n"}割引（わりびき）(wari biki) (လျှော့စျေး (discount))
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Member = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>員{"\t\t"}အဖွဲ့ဝင်</Text>
      <LottieViewForAll filterKanjiToAppend="員" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Member.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အဖွဲ့ဝင်/ဝန်ထမ်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>イン (in)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>10</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          会社員（かいしゃいん）(kai sha in) (ကုမ္ပဏီဝန်ထမ်း){"\n"}
          会員（かいいん）(kai in) (အဖွဲ့ဝင်){"\n"}店員（てんいん）(ten in)
          (ဆိုင်ဝန်ထမ်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Carry = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        運{"\t\t"}သယ်ဆောင်သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="運" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Carry.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သယ်ဆောင်သည်/ကံတရား</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ウン (un)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>はこ (hako)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>12</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          運ぶ（はこぶ）(hako bu) (သယ်ဆောင်သည်){"\n"}運命（うんめい）(un mei)
          (ကံတရား){"\n"}運転する（うんてんする）(un ten suru) (မောင်းနှင်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const English = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        英{"\t\t"}အင်္ဂလိပ်
      </Text>
      <LottieViewForAll filterKanjiToAppend="英" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/English.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အင်္ဂလိပ်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>エイ (ei)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>8</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          英語（えいご）(ei go) (အင်္ဂလိပ်ဘာသာစကား){"\n"}英会話（えいかいわ）(ei
          kai wa) (အင်္ဂလိပ်စကားစမြည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Project = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        映{"\t\t"}ရောင်ပြန်ဟပ်သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="映" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Project.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ရောင်ပြန်ဟပ်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>エイ (ei)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>は (ha)、うつ (utsu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>9</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          映画（えいが）(ei ga) (ရုပ်ရှင်){"\n"}映る（うつる）(utsu ru)
          (ရောင်ပြန်ဟပ်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Far = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>遠{"\t\t"}ဝေးသော</Text>
      <LottieViewForAll filterKanjiToAppend="遠" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Far.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဝေးသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>エン (en)、オン (on)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>とお (too)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>13</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          遠い（とおい）(too i) (ဝေးသော){"\n"}遠足（えんそく）(en soku)
          (လေ့လာရေးခရီး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Room = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>屋{"\t\t"}အခန်း</Text>
      <LottieViewForAll filterKanjiToAppend="屋" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Room(heya).gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အခန်း/ခေါင်မိုး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>オク (oku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>や (ya)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>9</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          部屋（へや）(he ya) (အခန်း){"\n"}屋根 / 屋上（やね / おくじょう）(ya
          ne / oku jou) (ခေါင်မိုး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Sound = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>音{"\t\t"}အသံ</Text>
      <LottieViewForAll filterKanjiToAppend="音" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Sound(oto).gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အသံ(သက်မဲ့)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>オン (on)、イン (in)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おと (oto)、ね (ne)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>9</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          音（おと）(oto) (အသံ(သက်မဲ့)){"\n"}音楽（おんがく）(on gaku) (ဂီတ)
          {"\n"}発音（はつおん）(hatsu on) (အသံထွက်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Song = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>歌{"\t\t"}သီချင်း</Text>
      <LottieViewForAll filterKanjiToAppend="歌" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Song.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သီချင်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カ (ka)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>うた (uta)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>14</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          歌（うた）(uta) (သီချင်း){"\n"}歌う（うたう）(uta u) (သီချင်းဆိုသည်)
          {"\n"}歌手（かしゅ）(ka shu) (အဆိုတော်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const House = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>家{"\t\t"}အိမ်</Text>
      <LottieViewForAll filterKanjiToAppend="家" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/House.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အိမ်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カ (ka)、ケ (ke)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>
          いえ (ie)、うち (uchi)、や (ya)
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>10</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          家（いえ）(ie) (အိမ်){"\n"}家族（かぞく）(ka zoku) (မိသားစု){"\n"}
          家具（かぐ）(ka gu) (ပရိဘောဂ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Picture = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        画{"\t\t"}ပန်ချီကား
      </Text>
      <LottieViewForAll filterKanjiToAppend="画" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Picture.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ပန်ချီကား</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ガ (ga)、カク (kaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>8</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          映画（えいが）(ei ga) (ရုပ်ရှင်){"\n"}計画（けいかく）(kei kaku)
          (အစီအစဉ်){"\n"}画家（がか）(ga ka) (ပန်းချီဆရာ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);
