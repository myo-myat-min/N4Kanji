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

export const Person = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>者{"\t\t"}လူ</Text>
      <LottieViewForAll filterKanjiToAppend="者" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Person.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လူ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シャ (sha)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>もの (mono)</Text>
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
          医者（いしゃ）(i sha) (ဆရာဝန်){"\n"}歯医者（はいしゃ）(ha i sha)
          (သွားဆရာဝန်){"\n"}
          若者（わかもの）(waka mono) (ငယ်ရွယ်သူ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Borrow = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        借{"\t\t"}ချေးငှားသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="借" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Borrow.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ချေးငှားသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シャク (shaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>か (ka)</Text>
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
          借りる（かりる）(ka riru) (ချေးငှားသည်){"\n"}借金（しゃっきん）(shak
          kin) (အကြွေး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Weak = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        弱{"\t\t"}အားနည်းသော
      </Text>
      <LottieViewForAll filterKanjiToAppend="弱" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Weak.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အားနည်းသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ジャク (jaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>よわ (yowa)</Text>
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
          弱い（よわい）(yowa i) (အားနည်းသော){"\n"}弱める（よわめる）(yowa meru)
          (အားနည်းသည်){"\n"}弱点（じゃくてん）(jaku ten) (အားနည်းချက်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Learn = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>習{"\t\t"}သင်ယူသည်</Text>
      <LottieViewForAll filterKanjiToAppend="習" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Learn.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သင်ယူသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シュウ (shuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>なら (nara)</Text>
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
          習う（ならう）(nara u) (သင်ယူသည်){"\n"}練習する（れんしゅうする）(ren
          shuu suru) (လေ့ကျင့်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const End = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>終{"\t\t"}အဆုံး</Text>
      <LottieViewForAll filterKanjiToAppend="終" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/End.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အဆုံး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シュウ (shuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>お (o)</Text>
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
          終わる（おわる）(o waru) (အဆုံးသတ်သည်){"\n"}最終（さいしゅう）(sai
          shuu) (နောက်ဆုံး)
          {"\n"}終わり（おわり）(o wari) (အဆုံးသတ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Live = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        住{"\t\t"}နေထိုင်သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="住" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Live.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နေထိုင်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ジュウ (juu)、チュウ (chuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>す (su)</Text>
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
          住む（すむ）(su mu) (နေထိုင်သည်){"\n"}住所（じゅうしょ）(juu sho)
          (လိပ်စာ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Heavy = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>重{"\t\t"}လေးလံသော</Text>
      <LottieViewForAll filterKanjiToAppend="重" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Heavy.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လေးလံသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ジュウ (juu)、チョウ (chou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おも (omo)、かさ (kasa)</Text>
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
          重い（おもい）(omo i) (လေးလံသော){"\n"}体重（たいじゅう）(tai juu)
          (ကိုယ်အလေးချိန်)
          {"\n"}重力（じゅうりょく）(juu ryoku) (ဆွဲငင်အား)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Place = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>所{"\t\t"}နေရာ</Text>
      <LottieViewForAll filterKanjiToAppend="所" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Place.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နေရာ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ショ (sho)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ところ (tokoro)</Text>
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
          所（ところ）(tokoro) (နေရာ){"\n"}住所（じゅうしょ）(juu sho) (လိပ်စာ)
          {"\n"}台所（だいどころ）(dai dokoro) (မီးဖိုချောင်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Hot = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>暑{"\t\t"}ပူသော</Text>
      <LottieViewForAll filterKanjiToAppend="暑" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Hot.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ပူသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ショ (sho)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>あつ (atsu)</Text>
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
          暑い（あつい）(atsu i) (ပူသော){"\n"}蒸し暑い（むしあつい）(mu shi atsu
          i) (စိုစွတ်သော)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const PlaceBa = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>場{"\t\t"}နေရာ</Text>
      <LottieViewForAll filterKanjiToAppend="場" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Place(ba).gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နေရာ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ジョウ (jou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ば (ba)</Text>
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
          場所（ばしょ）(ba sho) (နေရာ){"\n"}運動場（うんどうじょう）(un dou
          jou) (ကစားကွင်း)
          {"\n"}駐車場（ちゅうしゃじょう）(chuu sha jou) (ကားရပ်နားရန်နေရာ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Ride = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        乗{"\t\t"}စီးနင်းလိုက်ပါသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="乗" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Ride.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>စီးနင်းလိုက်ပါသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ジョウ (jou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>の (no)</Text>
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
          乗る（のる）(no ru) (စီးနင်းလိုက်ပါသည်){"\n"}乗客（じょうきゃく）(jou
          kyaku) (ခရီးသည်)
          {"\n"}乗り物（のりもの）(no ri mono) (မော်တော်ယာဉ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Parent = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>親{"\t\t"}မိဘ</Text>
      <LottieViewForAll filterKanjiToAppend="親" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Parent.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မိဘ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シン (shin)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おや (oya)、した (shita)</Text>
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
          親（おや）(oya) (မိဘ){"\n"}親切な（しんせつな）(shin setsu na)
          (ကြင်နာသော)
          {"\n"}親戚（しんせき）(shin seki) (ဆွေမျိုး){"\n"}
          親しい（したしい）(shita shii) (ရင်းနှီးသော)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Reality = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        真{"\t\t"}အမှန်တရား
      </Text>
      <LottieViewForAll filterKanjiToAppend="真" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Reality.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အမှန်တရား</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シン (shin)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ま (ma)、まこと (makoto)</Text>
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
          真実（しんじつ）(shin jitsu) (အမှန်တရား){"\n"}写真（しゃしん）(sha
          shin) (ဓာတ်ပုံ)
          {"\n"}真っ直ぐ（まっすぐ）(mas su gu) (တည့်တည့်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Continue = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        進{"\t\t"}ဆက်လက်လုပ်ဆောင်သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="進" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Continue.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဆက်လက်လုပ်ဆောင်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>シン (shin)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>すす (susu)</Text>
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
          進む（すすむ）(susu mu) (ဆက်လက်လုပ်ဆောင်သည်){"\n"}進化（しんか）(shin
          ka) (တိုးတက်မှု)
          {"\n"}昇進（しょうしん）(shou shin) (မြှင့်တင်ခြင်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Map = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>図{"\t\t"}အစီအစဉ်</Text>
      <LottieViewForAll filterKanjiToAppend="図" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Map.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အစီအစဉ်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ズ (zu)、ト (to)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>はか (haka)</Text>
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
          地図（ちず）(chi zu) (မြေပုံ){"\n"}図書館（としょかん）(to sho kan)
          (စာကြည့်တိုက်)
          {"\n"}意図（いと）(i to) (ရည်ရွယ်ချက်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);
