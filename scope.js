//Global scope
//var variable = 1;
let variable = 2;


function func(){
   variable = 10;
    //Function scope
    console.log("1.cevap", variable);
}
func();
console.log("2.cevap", variable);
console.log("--------------------------------------");



var value1 = 10;
let value2 = 20;
const value3 = 30;

function func(){
    var value1 = 40; //önemli bir veri tuttuğunda
    let value2 = 50;
    const value3 = 60;

    if (true){
        //BLOCK SCOPE
        var value4 = 70; //scope'Unu aşıp üst scope'da tanımlandı. var riskli bişey ya
        var value1 = 70; //önemli veri üzerine yazma uygulandı ve veri kayboldu
        let value5 = 80;
        const value6 = 90;
        console.log(value4, value5);
//70 80 

    }

    console.log(value1, value2, value3, value4);
    // 40 50 60 70
    //console.log(value5); error

// 
}
func();
console.log(value1, value2, value3);