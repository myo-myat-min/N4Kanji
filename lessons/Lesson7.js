import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { styles } from "../routes/ChooseKanjiDrawer";
import {
  meaning,
  onyomi,
  kunyomi,
  strokeCount,
  vocabulary,
  meaningTab,
  onyomiTab,
  kunyomiTab,
  strokeCountTab,
  vocabularyTab,
  MenuButtonComponent,
  LottieViewForAll,
} from "./Lesson1";

export const Ground = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>地{"\t\t"}မြေပြင်</Text>
      <LottieViewForAll filterKanjiToAppend="地" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Ground.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မြေပြင်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チ (chi)、ジ (ji)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>6</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          地図（ちず）(chi zu) (မြေပုံ){"\n"}地下鉄（ちかてつ）(chi ka tetsu)
          (မြေအောက်ရထား)
          {"\n"}地獄（じごく）(ji goku) (ငရဲ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Pond = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>池{"\t\t"}ရေအိုင်</Text>
      <LottieViewForAll filterKanjiToAppend="池" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Pond.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ရေအိုင်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チ (chi)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>いけ (ike)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>6</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          池（いけ）(ike) (ရေအိုင်){"\n"}電池（でんち）(den chi) (ဘက်ထရီ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Tea = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        茶{"\t\t"}လက်ဖက်ရည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="茶" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Tea.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လက်ဖက်ရည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チャ (cha)、サ (sa)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
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
          お茶（おちゃ）(o cha) (လက်ဖက်ရည်){"\n"}喫茶店（きっさてん）(kis sa
          ten) (လက်ဖက်ရည်ဆိုင်)
          {"\n"}茶色（ちゃいろ）(cha iro) (အညိုရောင်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Arrive = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        着{"\t\t"}ရောက်ရှိသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="着" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Arrive.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ရောက်ရှိသည်/ဝတ်ဆင်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チャク (chaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>き (ki)、つ (tsu)</Text>
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
          着く（つく）(tsu ku) (ရောက်ရှိသည်){"\n"}着る（きる）(ki ru)
          (ဝတ်ဆင်သည်)
          {"\n"}着物（きもの）(ki mono) (ကီမိုနို)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Notice = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>注{"\t\t"}သတိ</Text>
      <LottieViewForAll filterKanjiToAppend="注" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Notice.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သတိ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チュウ (chuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>
          そそ (soso)、さ (sa)、つ (tsu)
        </Text>
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
          注意（ちゅうい）(chuu i) (သတိ){"\n"}注ぐ（そそぐ）(soso gu)
          (လောင်းသည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Bird = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        鳥{"\t\t"}ငှက်/ကြက်
      </Text>
      <LottieViewForAll filterKanjiToAppend="鳥" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Bird.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ငှက်/ကြက်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>チョウ (chou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>とり (tori)</Text>
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
          鳥（とり）(tori) (ငှက်){"\n"}小鳥（ことり）(ko tori) (ငှက်ပေါက်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Pass = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        通{"\t\t"}ကျော်ဖြတ်သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="通" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Pass.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ကျော်ဖြတ်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ツウ (tsuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>とお (too)、かよ (kayo)</Text>
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
          通る（とおる）(too ru) (ကျော်ဖြတ်သည်){"\n"}交通（こうつう）(kou tsuu)
          (သယ်ယူပို့ဆောင်ရေး)
          {"\n"}通う（かよう）(kayo u) (အသွားအပြန်လုပ်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const YoungerBrother = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>弟{"\t\t"}ညီ</Text>
      <LottieViewForAll filterKanjiToAppend="弟" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/YoungerBrother.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ညီ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>
          テイ (tei)、 ダイ (dai)、 デ (de)
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おとうと (otouto)</Text>
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
          弟（おとうと）(otouto) (ညီ){"\n"}兄弟（きょうだい）(kyou dai)
          (ညီအစ်ကို)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Low = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>低{"\t\t"}နိမ့်သော</Text>
      <LottieViewForAll filterKanjiToAppend="低" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Low.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နိမ့်သော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>テイ (tei)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ひく (hiku)</Text>
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
          低い（ひくい）(hiku i) (နိမ့်သော){"\n"}最低（さいてい）(sai tei)
          (အနိမ့်ဆုံး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Roll = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>転{"\t\t"}လိမ့်သည်</Text>
      <LottieViewForAll filterKanjiToAppend="転" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Roll.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လိမ့်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>テン (ten)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ころ (koro)</Text>
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
          転がる（ころがる）(koro garu) (လိမ့်သည်){"\n"}自転車（じてんしゃ）(ji
          ten sha) (စက်ဘီး)
          {"\n"}運転する（うんてんする）(un ten suru) (မောင်းနှင်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const CapitalMiyako = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        都{"\t\t"}မြို့တော်
      </Text>
      <LottieViewForAll filterKanjiToAppend="都" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Capital(Miyako).gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မြို့တော်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ト (to)、ツ (tsu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>みやこ (miyako)</Text>
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
          都（みやこ）(miyako) (မြို့တော်){"\n"}都会（とかい）(to kai) (မြို့)
          {"\n"}都合（つごう）(tsu gou) (အဆင်ပြေမှု)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Degree = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>度{"\t\t"}အကြိမ်ရေ</Text>
      <LottieViewForAll filterKanjiToAppend="度" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Degree.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အကြိမ်ရေ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>
          ド (do)、ト (to)、タク (taku)
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>たび (tabi)、た (ta)</Text>
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
          度（ど）(do) (အကြိမ်ရေ){"\n"}度度（たびたび）(tabi tabi) (မကြာခဏ)
          {"\n"}支度（したく）(shi taku) (ကြိုတင်ပြင်ဆင်မှု)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Answer = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>答{"\t\t"}အဖြေ</Text>
      <LottieViewForAll filterKanjiToAppend="答" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Answer.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အဖြေ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>トウ (tou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>こた (kota)</Text>
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
          答え（こたえ）(kota e) (အဖြေ){"\n"}答える（こたえる）(kota eru)
          (ဖြေသည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Head = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>頭{"\t\t"}ဦးခေါင်း</Text>
      <LottieViewForAll filterKanjiToAppend="頭" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Head.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဦးခေါင်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>トウ (tou)、ズ (zu)、ト (to)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>
          あたま (atama)、かしら (kashira)
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>16</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          頭（あたま）(atama) (ဦးခေါင်း){"\n"}頭痛（ずつう）(zu tsuu)
          (ခေါင်းကိုက်ခြင်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Same = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>同{"\t\t"}အတူတူ</Text>
      <LottieViewForAll filterKanjiToAppend="同" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Same.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အတူတူ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ドウ (dou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おな (ona)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>6</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          同じ（おなじ）(ona ji) (အတူတူ){"\n"}同時に（どうじに）(dou ji ni)
          (တစ်ချိန်တည်းမှာ)
          {"\n"}同意（どうい）(dou i) (သဘောတူညီချက်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);
