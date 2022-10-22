//  Class
export default class Ev{
    constructor(odaSayisi, kat, cephe, aidat, fiyat){
        this.odaSayisi = odaSayisi;
        this.kat = kat;
        this.cephe = cephe;
        this.aidat = aidat;
        this.fiyat = fiyat;
    }


tanit(){
    console.log(this);
}

tanit(){
    console.log("tanit2", this);
}
}

export const ev1 = new Ev(3,2,"Kuzey", 100, 2000);
ev1.tanit();

function evOlustur (oda, kat, cephe, aidat, fiyat){
    this.odaSayisi = oda;
    this.kat = kat;
    this.cephe = cephe;
    this.aidat = aidat;
    this.fiyat = fiyat;
  }
  evOlustur.prototype.tanit = function () {
    console.log(this);
  };
  evOlustur.prototype.tanit = function () {
    console.log("tanit2", this);
  };
  const ev2 = new evOlustur(3, 2, "Kuzey", 100, 5000);
  ev2.tanit()

class Customer{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}