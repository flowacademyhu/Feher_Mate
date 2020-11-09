//1. -------------------------
//string
a='szöveg';

//number
b=10;

//boolean
c=true;

//array 
d=[1,2,3];

//object
e={
name: '1Máté',
age: 26
};

//2. -------------------------
// A consttal deklarált változók értéke nem felülírható a program során.
// pl:
const A=2;
A=3;
console.log(A); 
// A lettel deklarált változóknak új éértéket adhatunk a program során.
let B=2;
B=3;
console.log(B); 
//3. -------------------------
//Ha a paraméter referencia típusú, a paraméter változása megváltoztatja az adatot, amelyre a referencia mutat.


//Érték szerinti paraméterátadás esetén a függvény az adat értékének másolatával dolgozik.

//4. --------------------------

const containsElement = (arr,num) => {
    let cont= false;
    for (i=0; i<arr.length; i++) {
        if (num===arr[i]){
            cont=true;
        }
    };
    return cont;
}

//5. ---------------------------

const obj = [{
    name: 'Feri',
    age: 25
}];

const oldest = (arr) => {
    let max =0;
    let oldestAlive='';
    for (i=0; i<arr.length; i++) {
        if (arr[i].age>max) {
            max=arr[i].age;
            oldestAlive=arr[i].name;
        }
    }
    return oldestAlive;
};

//6. -----------------------

const twoDigitEven = () => {
    let base = [];
    for (i=10; i<100; i++) {
        if (i%2===0) {
            base.push(i);
        }
    }
    return base;
};

//7. --------------------------

const egyik = [1,2,3];
const masik =[2,3,4];

const metszet = () => {
    let m = [];
    for (i=0; i<egyik.length; i++) {
        for (k=0; k<masik.length; k++) {
            if (egyik[i]===masik[k]) {
                m.push(i);
            }
        }
    }
    return m;
};

// 8. --------------------------

const fgvk = require('./modul.js');