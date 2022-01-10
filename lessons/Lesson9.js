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

export const Taste = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>味{"\t\t"}အရသာ</Text>
      <LottieViewForAll filterKanjiToAppend="味" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Taste.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အရသာ</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ミ (mi)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>あじ (aji)</Text>
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
          味（あじ）(aji) (အရသာ){"\n"}趣味（しゅみ）(shu mi) (ဝါသနာ)
          {"\n"}意味（いみ）(i mi) (အဓိပ္ပါယ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Nation = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>民{"\t\t"}လူမျိုး</Text>
      <LottieViewForAll filterKanjiToAppend="民" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Nation.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လူမျိုး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ミン (min)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>たみ (tami)</Text>
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
          国民（こくみん）(koku min) (လူမျိုး){"\n"}市民（しみん）(shi min)
          (နိုင်ငံသား)
          {"\n"}民草（たみくさ）(tami kusa) (ပြည်သူပြည်သားများ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Question = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>問{"\t\t"}မေးခွန်း</Text>
      <LottieViewForAll filterKanjiToAppend="問" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Question.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>မေးခွန်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>モン (mon)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>と (to)</Text>
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
          問題（もんだい）(mon dai) (မေးခွန်း){"\n"}問う（とう）(to u)
          (မေးမြန်းသည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Field = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>野{"\t\t"}လွင်ပြင်</Text>
      <LottieViewForAll filterKanjiToAppend="野" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Field.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>လွင်ပြင်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ヤ (ya)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>の (no)</Text>
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
          野（の）(no) (လွင်ပြင်)
          {"\n"}野菜（やさい）(ya sai) (ဟင်းသီးဟင်းရွက်){"\n"}野性（やせい）(ya
          sei) (အရိုင်းဆန်ခြင်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Pill = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>薬{"\t\t"}ဆေးဝါး</Text>
      <LottieViewForAll filterKanjiToAppend="薬" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Pill.gif")}
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
        <Text style={styles.desContentStyle}>ヤク (yaku)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>くすり (kusuri)</Text>
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
          薬（くすり）(kusuri) (ဆေးဝါး){"\n"}薬局（やっきょく）(yak kyoku)
          (ဆေးဆိုင်)
          {"\n"}薬品（やくひん）(yaku hin) (ဓာတုပစ္စည်းများ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Exist = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        有{"\t\t"}တည်ရှိသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="有" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Exist.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>တည်ရှိသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ユウ (yuu)、ウ (u)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>あ (a)</Text>
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
          有る（ある）(a ru) (တည်ရှိသည်){"\n"}有名な（ゆうめいな）(yuu mei na)
          (နာမည်ကြီးသော)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Utilize = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        用{"\t\t"}အသုံးချသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="用" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Utilize.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အသုံးချသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ヨウ (you)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>もち (mochi)</Text>
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
          用いる（もちいる）(mochi iru) (အသုံးချသည်){"\n"}利用（りよう）(ri you)
          (အသုံးပြုမှု){"\n"}用意（ようい）(you i) (ကြိုတင်ပြင်ဆင်မှု)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Western = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        洋{"\t\t"}အနောက်တိုင်း
      </Text>
      <LottieViewForAll filterKanjiToAppend="洋" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Western.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အနောက်တိုင်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ヨウ (you)</Text>
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
          洋風（ようふう）(you fuu) (အနောက်တိုင်းပုံစံ){"\n"}
          洋服（ようふく）(you fuku) (အနောက်တိုင်းအဝတ်အစား)
          {"\n"}洋画（ようが）(you ga) (အနောက်တိုင်းရုပ်ရှင်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Reason = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        理{"\t\t"}အကြောင်းပြချက်
      </Text>
      <LottieViewForAll filterKanjiToAppend="理" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Reason.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>အကြောင်းပြချက်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>リ (ri)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>-</Text>
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
          理由（りゆう）(ri yuu) (အကြောင်းပြချက်){"\n"}料理（りょうり）(ryou ri)
          (ဟင်းလျာ)
          {"\n"}無理な（むりな）(mu ri na) (မဖြစ်နိုင်သော)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Trip = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>旅{"\t\t"}ခရီး</Text>
      <LottieViewForAll filterKanjiToAppend="旅" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Trip.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ခရီး</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>リョ (ryo)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>たび (tabi)</Text>
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
          旅行（りょこう）(ryo kou) (ခရီး){"\n"}旅券（りょけん）(ryo ken)
          (နိုင်ငံကူးလက်မှတ်)
          {"\n"}旅館（りょかん）(ryo kan) (ဂျပန်စတိုင်ဟိုတယ်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Ingredients = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        料{"\t\t"}ပါဝင်ပစ္စည်း
      </Text>
      <LottieViewForAll filterKanjiToAppend="料" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Ingredients.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ပါဝင်ပစ္စည်း</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>リョウ (ryou)</Text>
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
          料理（りょうり）(ryou ri) (ဟင်းလျာ){"\n"}給料（きゅうりょう）(kyuu
          ryou) (လစာ)
          {"\n"}料金（りょうきん）(ryou kin) (အခကြေးငွေ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Fall = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>
        降{"\t\t"}ကျသည်/ဆင်းသည်
      </Text>
      <LottieViewForAll filterKanjiToAppend="降" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Fall.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ကျသည်/ဆင်းသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>コウ (kou)、ゴ (go)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>お (o)、ふ (fu)</Text>
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
          降りる（おりる）(o riru) (ဆင်းသည်){"\n"}雨が降る（あめがふる）(ame ga
          fu ru) (မိုးရွာသည်)
          {"\n"}投降（とうこう）(tou kou) (အညံ့ခံခြင်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Push = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>押{"\t\t"}တွန်းသည်</Text>
      <LottieViewForAll filterKanjiToAppend="押" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Push.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>တွန်းသည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>オウ (ou)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>お (o)</Text>
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
          押す（おす）(o su) (တွန်းသည်){"\n"}押し入れ（おしいれ）(o shi i re)
          (ဗီရို)
          {"\n"}押収（おうしゅう）(ou shuu) (သိမ်းယူခြင်း)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Sit = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>座{"\t\t"}ထိုင်သည်</Text>
      <LottieViewForAll filterKanjiToAppend="座" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Sit.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ထိုင်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ザ (za)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>すわ (suwa)</Text>
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
          座る（すわる）(suwa ru) (ထိုင်သည်){"\n"}座席（ざせき）(za seki)
          (ထိုင်ခုံ)
        </Text>
      </Text>
    </ScrollView>
  </View>
);

export const Close = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.notchView} />
    <View style={styles.header}>
      <MenuButtonComponent navigation={navigation} />
      <Text style={[styles.title, { marginLeft: 15 }]}>閉{"\t\t"}ပိတ်သည်</Text>
      <LottieViewForAll filterKanjiToAppend="閉" navigation={navigation} />
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/N4Kanji/Close.gif")}
        style={styles.image}
      />
    </View>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.desTitleStyle}>
        {meaning}
        {meaningTab}
        <Text style={styles.desContentStyle}>ပိတ်သည်</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {onyomi}
        {onyomiTab}
        <Text style={styles.desContentStyle}>ヘイ (hei)</Text>
      </Text>
      <Text style={styles.desTitleStyle}>
        {kunyomi}
        {kunyomiTab}
        <Text style={styles.desContentStyle}>と (to)、し (shi)</Text>
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
          閉める（しめる）(shi meru) (ပိတ်သည်)
        </Text>
      </Text>
    </ScrollView>
  </View>
);
