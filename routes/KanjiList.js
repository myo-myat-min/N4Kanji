import {
  Bad,
  Dark,
  Medicine,
  Mind,
  Prefix,
  Pull,
  Member,
  Carry,
  English,
  Project,
  Far,
  Room,
  Sound,
  Song,
  House,
  Picture,
} from "../lessons/Lesson1";
import {
  Times,
  Open,
  World,
  Music,
  Building,
  China,
  Cold,
  Face,
  Research,
  Sudden,
  Cow,
  Teach,
  Capital,
  Business,
  Near,
} from "../lessons/Lesson2";
import {
  District,
  Measure,
  Brother,
  Light,
  Sharpen,
  Prefecture,
  Build,
  Exam,
  Think,
  Shine,
  Fit,
  Vegetable,
  Make,
  Birth,
  Paper,
} from "../lessons/Lesson3";
import {
  ThinkOmou,
  Sister,
  Stop,
  Serve,
  Death,
  Use,
  Begin,
  Try,
  I,
  Character,
  Self,
  Matter,
  RoomShitsu,
  Quality,
  Copy,
} from "../lessons/Lesson4";
import {
  Person,
  Borrow,
  Weak,
  Learn,
  End,
  Live,
  Heavy,
  Place,
  Hot,
  PlaceBa,
  Ride,
  Parent,
  Reality,
  Continue,
  Map,
} from "../lessons/Lesson5";
import {
  Correct,
  Voice,
  WorldSe,
  Cut,
  Theory,
  Wash,
  Send,
  Family,
  Fat,
  Lend,
  Stand,
  Replace,
  Topic,
  Short,
  Know,
} from "../lessons/Lesson6";
import {
  Ground,
  Pond,
  Tea,
  Arrive,
  Notice,
  Bird,
  Pass,
  YoungerBrother,
  Low,
  Roll,
  CapitalMiyako,
  Degree,
  Answer,
  Head,
  Same,
} from "../lessons/Lesson7";
import {
  Move,
  Hall,
  Work,
  Special,
  Departure,
  Meal,
  Goods,
  Negative,
  Wind,
  Cloth,
  Thing,
  Literature,
  Different,
  Walk,
  YoungerSister,
} from "../lessons/Lesson8";
import {
  Taste,
  Nation,
  Question,
  Field,
  Pill,
  Exist,
  Utilize,
  Western,
  Reason,
  Trip,
  Ingredients,
  Fall,
  Push,
  Sit,
  Close,
} from "../lessons/Lesson9";
import {
  Sleep,
  PrefectureFu,
  Yellow,
  Harmony,
  Liquor,
  Profit,
  Section,
  Interior,
} from "../lessons/Lesson10";
import Draw from "../screens/Draw";

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export var kanjiArray = [
  //   lesson1
  {
    title: "悪   ဆိုးသော",
    component: Bad,
  },
  {
    title: "暗   မှောင်သော",
    component: Dark,
  },
  {
    title: "医   ဆေးဝါး",
    component: Medicine,
  },
  {
    title: "意   စိတ်ဆန္ဒ",
    component: Mind,
  },
  {
    title: "引   ဆွဲသည်",
    component: Pull,
  },
  {
    title: "員   အဖွဲ့ဝင်",
    component: Member,
  },
  {
    title: "運   သယ်ဆောင်သည်",
    component: Carry,
  },
  {
    title: "英   အင်္ဂလိပ်",
    component: English,
  },
  {
    title: "映   ရောင်ပြန်ဟပ်သည်",
    component: Project,
  },
  {
    title: "遠   ဝေးသော",
    component: Far,
  },
  {
    title: "屋   အခန်း",
    component: Room,
  },
  {
    title: "音   အသံ",
    component: Sound,
  },
  {
    title: "歌   သီချင်း",
    component: Song,
  },
  {
    title: "家   အိမ်",
    component: House,
  },
  {
    title: "画   ပန်ချီကား",
    component: Picture,
  },
  //   lesson2
  {
    title: "回   အကြိမ်",
    component: Times,
  },
  {
    title: "開   ဖွင့်သည်",
    component: Open,
  },
  {
    title: "界   ကမ္ဘာ",
    component: World,
  },
  {
    title: "楽   ဂီတ",
    component: Music,
  },
  {
    title: "館   အဆောက်အဦး",
    component: Building,
  },
  {
    title: "漢   တရုတ်",
    component: China,
  },
  {
    title: "寒   အေးသော",
    component: Cold,
  },
  {
    title: "顔   မျက်နှာ",
    component: Face,
  },
  {
    title: "究   သုတေသန",
    component: Research,
  },
  {
    title: "急   ရုတ်တရက်",
    component: Sudden,
  },
  {
    title: "牛   နွား",
    component: Cow,
  },
  {
    title: "教   သင် ပေး/ယူ သည်",
    component: Teach,
  },
  {
    title: "京   မြို့တော်",
    component: Capital,
  },
  {
    title: "業   အလုပ်အကိုင်",
    component: Business,
  },
  {
    title: "近   နီးသော",
    component: Near,
  },
  //   lesson3
  {
    title: "区   ခရိုင်",
    component: District,
  },
  {
    title: "計   တိုင်းတာသည်",
    component: Measure,
  },
  {
    title: "兄   အစ်ကို",
    component: Brother,
  },
  {
    title: "軽   ပေါ့သော",
    component: Light,
  },
  {
    title: "研   ချွန်သည်",
    component: Sharpen,
  },
  {
    title: "県   စီရင်စု",
    component: Prefecture,
  },
  {
    title: "建   တည်ဆောက်သည်",
    component: Build,
  },
  {
    title: "験   စာမေးပွဲ",
    component: Exam,
  },
  {
    title: "考   စဉ်းစားသည်",
    component: Think,
  },
  {
    title: "光   တောက်ပသည်",
    component: Shine,
  },
  {
    title: "合   လိုက်ဖက်သည်",
    component: Fit,
  },
  {
    title: "菜   ဟင်းသီးဟင်းရွက်",
    component: Vegetable,
  },
  {
    title: "作   ပြုလုပ်သည်",
    component: Make,
  },
  {
    title: "産   မွေးဖွားခြင်း",
    component: Birth,
  },
  {
    title: "紙   စာရွက်",
    component: Paper,
  },
  //   lesson4
  {
    title: "思   စဉ်းစားသည်",
    component: ThinkOmou,
  },
  {
    title: "姉   အစ်မ",
    component: Sister,
  },
  {
    title: "止   ရပ်သည်",
    component: Stop,
  },
  {
    title: "仕   အလုပ်",
    component: Serve,
  },
  {
    title: "死   သေသည်",
    component: Death,
  },
  {
    title: "使   အသုံးပြုသည်",
    component: Use,
  },
  {
    title: "始   စတင်သည်",
    component: Begin,
  },
  {
    title: "試   ကြိုးစားသည်",
    component: Try,
  },
  {
    title: "私   ကျွန်တော်/မ",
    component: I,
  },
  {
    title: "字   အက္ခရာ",
    component: Character,
  },
  {
    title: "自   ကိုယ်တိုင်",
    component: Self,
  },
  {
    title: "事   ကိစ္စ",
    component: Matter,
  },
  {
    title: "室   အခန်း",
    component: RoomShitsu,
  },
  {
    title: "質   အရည်အသွေး",
    component: Quality,
  },
  {
    title: "写   ဓာတ်ပုံရိုက်သည်",
    component: Copy,
  },
  //   lesson5
  {
    title: "者   လူ",
    component: Person,
  },
  {
    title: "借   ချေးငှားသည်",
    component: Borrow,
  },
  {
    title: "弱   အားနည်းသော",
    component: Weak,
  },
  {
    title: "習   သင်ယူသည်",
    component: Learn,
  },
  {
    title: "終   အဆုံး",
    component: End,
  },
  {
    title: "住   နေထိုင်သည်",
    component: Live,
  },
  {
    title: "重   လေးလံသော",
    component: Heavy,
  },
  {
    title: "所   နေရာ",
    component: Place,
  },
  {
    title: "暑   ပူသော",
    component: Hot,
  },
  {
    title: "場   နေရာ",
    component: PlaceBa,
  },
  {
    title: "乗   စီးနင်းလိုက်ပါသည်",
    component: Ride,
  },
  {
    title: "親   မိဘ",
    component: Parent,
  },
  {
    title: "真   အမှန်တရား",
    component: Reality,
  },
  {
    title: "進   ဆက်လက်လုပ်ဆောင်သည်",
    component: Continue,
  },
  {
    title: "図   အစီအစဉ်",
    component: Map,
  },
  // lesson6
  {
    title: "正   မှန်ကန်သော",
    component: Correct,
  },
  {
    title: "声   အသံ (သက်ရှိ)",
    component: Voice,
  },
  {
    title: "世   ကမ္ဘာ",
    component: WorldSe,
  },
  {
    title: "切   ဖြတ်သည်",
    component: Cut,
  },
  {
    title: "説   သီအိုရီ",
    component: Theory,
  },
  {
    title: "洗   ဆေးကြောသည်",
    component: Wash,
  },
  {
    title: "送   ပို့သည်",
    component: Send,
  },
  {
    title: "族   မိသားစု",
    component: Family,
  },
  {
    title: "太   ဝသော",
    component: Fat,
  },
  {
    title: "貸   ချေးငှားသည်",
    component: Lend,
  },
  {
    title: "台   စင်မြင့်",
    component: Stand,
  },
  {
    title: "代   အစားထိုး",
    component: Replace,
  },
  {
    title: "題   ခေါင်းစဉ်",
    component: Topic,
  },
  {
    title: "短   တိုသော",
    component: Short,
  },
  {
    title: "知   သိသည်",
    component: Know,
  },
  // lesson7
  {
    title: "地   မြေပြင်",
    component: Ground,
  },
  {
    title: "池   ရေအိုင်",
    component: Pond,
  },
  {
    title: "茶   လက်ဖက်ရည်",
    component: Tea,
  },
  {
    title: "着   ရောက်ရှိသည်",
    component: Arrive,
  },
  {
    title: "注   သတိ",
    component: Notice,
  },
  {
    title: "鳥   ငှက်/ကြက်",
    component: Bird,
  },
  {
    title: "通   ကျော်ဖြတ်သည်",
    component: Pass,
  },
  {
    title: "弟   ညီ",
    component: YoungerBrother,
  },
  {
    title: "低   နိမ့်သော",
    component: Low,
  },
  {
    title: "転   လိမ့်သည်",
    component: Roll,
  },
  {
    title: "都   မြို့တော်",
    component: CapitalMiyako,
  },
  {
    title: "度   အကြိမ်ရေ",
    component: Degree,
  },
  {
    title: "答   အဖြေ",
    component: Answer,
  },
  {
    title: "頭   ဦးခေါင်း",
    component: Head,
  },
  {
    title: "同   အတူတူ",
    component: Same,
  },
  // lesson 8
  {
    title: "動   ရွှေ့သည်",
    component: Move,
  },
  {
    title: "堂   ခန်းမ",
    component: Hall,
  },
  {
    title: "働   အလုပ်လုပ်သည်",
    component: Work,
  },
  {
    title: "特   အထူး",
    component: Special,
  },
  {
    title: "発   ထွက်ခွာခြင်း",
    component: Departure,
  },
  {
    title: "飯   အစားအစာ",
    component: Meal,
  },
  {
    title: "品   ကုန်ပစ္စည်း",
    component: Goods,
  },
  {
    title: "不   အပျက်သဘော",
    component: Negative,
  },
  {
    title: "風   လေ",
    component: Wind,
  },
  {
    title: "服   အဝတ်အစား",
    component: Cloth,
  },
  {
    title: "物   အရာ",
    component: Thing,
  },
  {
    title: "文   စာပေ",
    component: Literature,
  },
  {
    title: "別   ကွဲပြားခြားနားမှု",
    component: Different,
  },
  {
    title: "歩   လမ်းလျှောက်သည်",
    component: Walk,
  },
  {
    title: "妹   ညီမ",
    component: YoungerSister,
  },
  // lesson9
  {
    title: "味   အရသာ",
    component: Taste,
  },
  {
    title: "民   လူမျိုး",
    component: Nation,
  },
  {
    title: "問   မေးခွန်း",
    component: Question,
  },
  {
    title: "野   လွင်ပြင်",
    component: Field,
  },
  {
    title: "薬   ဆေးဝါး",
    component: Pill,
  },
  {
    title: "有   တည်ရှိသည်",
    component: Exist,
  },
  {
    title: "用   အသုံးချသည်",
    component: Utilize,
  },
  {
    title: "洋   အနောက်တိုင်း",
    component: Western,
  },
  {
    title: "理   အကြောင်းပြချက်",
    component: Reason,
  },
  {
    title: "旅   ခရီး",
    component: Trip,
  },
  {
    title: "料   ပါဝင်ပစ္စည်း",
    component: Ingredients,
  },
  {
    title: "降   ကျသည်/ဆင်းသည်",
    component: Fall,
  },
  {
    title: "押   တွန်းသည်",
    component: Push,
  },
  {
    title: "座   ထိုင်သည်",
    component: Sit,
  },
  {
    title: "閉   ပိတ်သည်",
    component: Close,
  },
  // lesson10
  {
    title: "寝   အိပ်သည်",
    component: Sleep,
  },
  {
    title: "府   စီရင်စု",
    component: PrefectureFu,
  },
  {
    title: "黄   အဝါရောင်",
    component: Yellow,
  },
  {
    title: "和   ငြိမ်းချမ်းရေး",
    component: Harmony,
  },
  {
    title: "酒   အရက်",
    component: Liquor,
  },
  {
    title: "利   အမြတ်အစွန်း",
    component: Profit,
  },
  {
    title: "部   အပိုင်း",
    component: Section,
  },
  {
    title: "奥   အတွင်းပိုင်း",
    component: Interior,
  },
  {
    title: "🖋🖋",
    component: Draw,
  },
];

export const titleComCollection = () => {
  kanjiArray.map(async (item) => {
    try {
      const value = await AsyncStorage.getItem(item.title);
      return [{ title: value, component: item.component }];
    } catch (e) {
      Alert.alert("Error", "Unexpected error in retrieving data", [
        { text: "OK" },
      ]);
      return null;
    }
  });

  return kanjiArray;
};
