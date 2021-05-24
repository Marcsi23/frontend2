
//létrehozzuk a szám változót és értéket is adunk neki.
//változó létrehozása: deklarálás
// érték adás: value essigment
let szam = 9;
// value assigment
// a bal oldalon lévő változóba bele töltődik a jobb oldalon lévő érték
szam = 20;
// csak deklarálás
let myNumber;
// deklarálni három kulcsszóval lehet: var a;
let b; // let-et akkor használjuk, ha később a változó értékét módosítani akarjuk
const c = 10; // constans: akkor használjuk ha nem akarjul módosítani az értékét a változónak;constans

// szám: nincs körülötte aposztrof/idézőjel
a = 10;
b = 9;
console.log(a + b);

// string típusú változó: szöveg
let szoveg = 'hello';

console.log(szoveg.toUpperCase());

// tömb: olyan típus, ami több másik típust tud tárolni
const myArray = [3, 'hello', a, ['a', 'b']];

console.log(myArray);

// a tömböt nullától indexeljük:
console.log(myArray[0]);
// a 4. elemű tömb utolsó eleme a 3. lenne, 4. elem nem létezik
console.log(myArray[4]);

// logikai érték (bollean), true vagy false lehet az értéke
let kapcsolo = true;
