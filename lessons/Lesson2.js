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

export const Times = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>回{"\t\t"}အကြိမ်</Text>
      <LottieViewForAll filterKanjiToAppend="回" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Times.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အကြိမ်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カイ (kai)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>まわ (mawa)</Text>
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
          二回（にかい）(ni kai) (နှစ်ကြိမ်){"\n"}回す（まわす）(mawa su)
          (လှည့်သည်){"\n"}回る（まわる）(mawa ru) (လည်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Open = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>開{"\t\t"}ဖွင့်သည်</Text>
      <LottieViewForAll filterKanjiToAppend="開" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Open.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဖွင့်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カイ (kai)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>あ (a)​、ひら (hira)</Text>
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
          開ける（あける）(a keru) (ဖွင့်သည်){"\n"}開始（かいし）(kai shi) (အစ
          (the beginning)){"\n"}再開する（さいかいする）(sai kai suru)
          (ပြန်စသည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const World = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>界{"\t\t"}ကမ္ဘာ</Text>
      <LottieViewForAll filterKanjiToAppend="界" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/World(kai).gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ကမ္ဘာ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カイ (kai)</Text>
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
          世界（せかい）(se kai) (ကမ္ဘာ){"\n"}境界（きょうかい）(kyou kai)
          (နယ်နိမိတ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Music = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>楽{"\t\t"}ဂီတ</Text>
      <LottieViewForAll filterKanjiToAppend="楽" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Music.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ဂီတ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ラク (raku)、ガク (gaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>たの (tano)</Text>
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
          音楽（おんがく）(on gaku) (ဂီတ){"\n"}楽しい（たのしい）(tano shii)
          (ပျော်ရွှင်သော){"\n"}楽しむ（たのしむ）(tano shimu)
          (ပျော်ရွှင်ကြည်နူးသည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Building = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        館{"\t\t"}အဆောက်အဦး
      </Text>
      <LottieViewForAll filterKanjiToAppend="館" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Building.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အဆောက်အဦး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カン (kan)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>やかた (yakata)</Text>
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
          映画館（えいがかん）(ei ga kan) (ရုပ်ရှင်ရုံ){"\n"}
          体育館（たいいくかん）(tai iku kan) (အားကစားရုံ){"\n"}
          大使館（たいしかん）(tai shi kan) (သံရုံး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const China = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>漢{"\t\t"}တရုတ်</Text>
      <LottieViewForAll filterKanjiToAppend="漢" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/China.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>တရုတ်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カン (kan)</Text>
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
          漢字（かんじ）(kan ji) (တရုတ်စာလုံး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Cold = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>寒{"\t\t"}အေးသော</Text>
      <LottieViewForAll filterKanjiToAppend="寒" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Cold.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အေးသော(အပူချိန်)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>カン (kan)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>さむ (samu)</Text>
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
          寒い（さむい）(samu i) (အေးသော(အပူချိန်)){"\n"}寒気（かんき）(kan ki)
          (လေအေး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Face = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>顔{"\t\t"}မျက်နှာ</Text>
      <LottieViewForAll filterKanjiToAppend="顔" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Face.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မျက်နှာ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ガン (gan)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>かお (kao)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {strokeCount}
        {strokeCountTab}
        <Text style={styles.desContentStyle}>18</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {vocabulary}
        {vocabularyTab}
        <Text style={styles.desContentStyle}>
          顔（かお）(kao) (မျက်နှာ){"\n"}笑顔（えがお）(e gao) (အပြုံး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Research = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>究{"\t\t"}သုတေသန</Text>
      <LottieViewForAll filterKanjiToAppend="究" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Research.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သုတေသန</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>キュウ (kyuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>きわ (kiwa)</Text>
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
          研究（けんきゅう）(ken kyuu) (သုတေသန){"\n"}
          研究室（けんきゅうしつ）(ken kyuu shitsu) (စမ်းသပ်ခန်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Sudden = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>急{"\t\t"}ရုတ်တရက်</Text>
      <LottieViewForAll filterKanjiToAppend="急" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Sudden.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ရုတ်တရက်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>キュウ (kyuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>いそ (iso)</Text>
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
          急に（きゅうに）(kyuu ni) (ရုတ်တရက်){"\n"}急ぐ（いそぐ）(iso gu)
          (သုတ်သီးသုတ်ပျာလုပ်သည်){"\n"}急ぎ（いそぎ）(iso gi) (သုတ်သီးသုတ်ပျာ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Cow = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>牛{"\t\t"}နွား</Text>
      <LottieViewForAll filterKanjiToAppend="牛" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Cow.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နွား</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ギュウ (gyuu)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>うし (ushi)</Text>
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
          牛（うし）(ushi) (နွား){"\n"}牛肉（ぎゅうにく）(gyuu niku) (အမဲသား)
          {"\n"}牛乳（ぎゅうにゅう）(gyuu nyuu) (နွားနို့)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Teach = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        教{"\t\t"}သင် ပေး/ယူ သည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="教" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Teach.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>သင်ပေးသည်/သင်ယူသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>キョウ (kyou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>おし (oshi)、おそ (oso)</Text>
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
          教える（おしえる）(oshi eru) (သင်ပေးသည်){"\n"}教わる（おそわる）(oso
          waru) (သင်ယူသည်)
          {"\n"}教師（きょうし）(kyou shi) (ဆရာ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Capital = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        京{"\t\t"}မြို့တော်
      </Text>
      <LottieViewForAll filterKanjiToAppend="京" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Capital.gif")}
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
        <Text style={styles.desContentStyle}>
          キョウ (kyou)、ケイ (kei)、キン (kin)
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>みやこ (miyako)</Text>
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
          東京（とうきょう）(tou kyou) (တိုကျိုမြို့){"\n"}京都（きょうと）(kyou
          to) (ကျိုတိုမြို့)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Business = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        業{"\t\t"}အလုပ်အကိုင်
      </Text>
      <LottieViewForAll filterKanjiToAppend="業" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Business.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>
          စီးပွားရေး/အနုပညာ/Karma/အလုပ်အကိုင်
        </Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ギョウ (gyou)、ゴウ (gou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>わざ (waza)</Text>
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
          職業（しょくぎょう）(shoku gyou) (အလုပ်အကိုင်){"\n"}
          卒業（そつぎょう）(sotsu gyou) (ဘွဲ့နှင်းသဘင်){"\n"}
          農業（のうぎょう）(nou gyou) (စိုက်ပျိုးရေး)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Near = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>近{"\t\t"}နီးသော</Text>
      <LottieViewForAll filterKanjiToAppend="近" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Near.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>နီးသော</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>キン (kin)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>ちか (chika)</Text>
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
          近い（ちかい）(chika i) (နီးသော){"\n"}最近（さいきん）(sai kin)
          (မကြာသေးမီက){"\n"}
          近所（きんじょ）(kin jo) (ပတ်ဝန်းကျင်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);
