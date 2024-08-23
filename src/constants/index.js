import Luffy from "../assets/onepiece01_luffy.png";
import Zoro from "../assets/onepiece02_zoro_bandana.png";
import Nami from "../assets/onepiece03_nami.png";
import Usopp from "../assets/onepiece04_usopp_sogeking.png";
import Sanji from "../assets/onepiece05_sanji.png";
import Chopper from "../assets/onepiece06_chopper.png";
import Robin from "../assets/onepiece07_robin.png";
import Franky from "../assets/onepiece08_franky.png";
import Brook from "../assets/onepiece09_brook.png";

import { shuffleArray } from "../shuffleArray.js";

export const cards = [
  {
    name: "ルフィ",
    id: "luffy",
    imgPath: Luffy,
    judge:"",
  },
  {
    name: "ゾロ",
    id: "zoro",
    imgPath: Zoro,
    judge: "はずれ",
  },
  {
    name: "ナミ",
    id: "nami",
    imgPath: Nami,
    judge: "はずれ",
  },
  {
    name: "ウソップ",
    id: "usopp",
    imgPath: Usopp,
    judge: "はずれ",
  },
  {
    name: "サンジ",
    id: "sanji",
    imgPath: Sanji,
    judge: "はずれ",
  },
  {
    name: "チョッパー",
    id: "chopper",
    imgPath: Chopper,
    judge: "はずれ",
  },
  {
    name: "ロビン",
    id: "robin",
    imgPath: Robin,
    judge: "はずれ",
  },
  {
    name: "フランキー",
    id: "franky",
    imgPath: Franky,
    judge: "はずれ",
  },
  {
    name: "ブルック",
    id: "brook",
    imgPath: Brook,
    judge: "はずれ",
  },
  {
    name: "ゾロ",
    id: "zoro2",
    imgPath: Zoro,
    judge: "はずれ",
  },
  {
    name: "ナミ",
    id: "nami2",
    imgPath: Nami,
    judge: "はずれ",
  },
  {
    name: "ウソップ",
    id: "usopp2",
    imgPath: Usopp,
    judge: "はずれ",
  },
  {
    name: "サンジ",
    id: "sanji2",
    imgPath: Sanji,
    judge: "はずれ",
  },
  {
    name: "チョッパー",
    id: "chopper2",
    imgPath: Chopper,
    judge: "はずれ",
  },
  {
    name: "ロビン",
    id: "robin2",
    imgPath: Robin,
    judge: "はずれ",
  },
  {
    name: "フランキー",
    id: "franky2",
    imgPath: Franky,
    judge: "はずれ",
  },
  {
    name: "ブルック",
    id: "brook2",
    imgPath: Brook,
    judge: "はずれ",
  },
  {
    name: "ゾロ",
    id: "zoro3",
    imgPath: Zoro,
    judge: "はずれ",
  },
  {
    name: "ナミ",
    id: "nami3",
    imgPath: Nami,
    judge: "はずれ",
  },
  {
    name: "ウソップ",
    id: "usopp3",
    imgPath: Usopp,
    judge: "はずれ",
  },
  {
    name: "サンジ",
    id: "sanji3",
    imgPath: Sanji,
    judge: "はずれ",
  },
];


export const shuffleCards = shuffleArray(cards)