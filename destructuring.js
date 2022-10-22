import { cevaplariniz } from "./restAndSpread.js"

//require();

console.log("------------");

console.log(cevaplariniz);

// const first= cevaplariniz[0];
// const second = cevaplariniz[1];

const [first, second, ...others] = cevaplariniz;
console.log(first, second, ...others);

console.log("------------------");

const [İçAnadolu, marmara, ege, akdeniz, [İcAnadolusSehirleri, marmarasehirleri, ...digerleri]] = [
    {name:"İç anadolu", population: 100000},
    {name:"Marmara", population: 200000},
    {name:"Ege", population: 300000},
    {name:"Akdeniz", population: 400000},
    [
        ["Ankara", "Konya"],
        ["i", "b"],
        ["iz", "ma"],
        ["ant", "me"],
    ],
];

console.log(İçAnadolu,marmara,ege,akdeniz);
console.log(...İcAnadolusSehirleri);
console.log(...marmarasehirleri);
console.log(...digerleri.flat(2));
