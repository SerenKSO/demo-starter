export function sizCevapVerin()
{
return [10,20,30,40,50];

}
// Rest Operatör
//parametreleri bir diziye dönüştürür toparlar
export function sum(...numbers){
   // console.info("n3", n3);
    let total =0;
        for (let i = 0; i < numbers.length; i++) {
            total+= numbers[i];
        }
    //return numbers.reduce((total, number) => total + number , 0 );
    return total;
}

function avg(kisiSayisi,...numbers){
    return sum(...numbers) / kisiSayisi;

}

//Spread Operatpor
//bir dizi elemanlarını tek tek parametre olarak gönderir birnirinden ayırır
export const cevaplariniz = sizCevapVerin();
//const res = sum(...cevaplariniz);
const res = avg(26,...cevaplariniz);
console.log(res);
//console.log(Math.max(...cevaplariniz));

function sayMyName(...letters){
    for (const letter of letters) {
        console.log(letter);
        
    }

}
//objeler spread veya for ile ayrılamaz
//sayMyName(...{name:"Ahmet", surname:"Çetinkaya"});

sayMyName(...Object.values({name:"Mehmtet", surname:"Kars"}));
sayMyName(...Object.entries({name:"Mehmtet", surname:"Kars"})); //array olarak key value
sayMyName(...Object.keys({name:"Mehmtet", surname:"Kars"})); //key dönüyo

let instructor ={
    firstName: "Ahmet",
    lastName: "Çetink",
}

let student ={
    firstName: "Anıl",
    lastName: "Kav",
}

const learningTopic={
    topic:["Javascript"],
}

  student ={ 
    // firstName: "Anıl",
    // lastName: "Kav",
    ...student,
    ...learningTopic,
}
// Object.assign(instructor,student);
learningTopic.topic.push("Angular");
console.log(instructor);
console.log(student);