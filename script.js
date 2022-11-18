// const vaisiai=['obuolys', 'kriause', 'apelsinas', 'pamidoras', 'persikas', 'ananasas', 'pamidoras', 'bananas'];
// console.log(vaisiai[1]);
// console.log(vaisiai.length);

// vaisiai.push('slyva'); // push metodas ideda nari visada i pabaiga
// vaisiai.pop('slyva'); // pop isima elemnta nuo pabaigos

// vaisiai.shift(); // isima elemnta is pradzios
// vaisiai.unshift('naujasVaisius') // ideda elementa i pabaiga

// vaisiai.splice(1, 1, 'spliceVaisius'); // Kur ides elementa, kiek elementu istrina, koki elementa ideda
// console.log(vaisiai);

// vaisiai.splice(0, 0, 0);
// console.log(vaisiai);

// let items = ["pirmas", "antras", "trecias"];

// items.forEach((item, index)=>{
//     console.log(index+1, item)
// })

// dvieju dimensiju masyvas
let klasiokai = [
    ["Jonas", "JS20", 100, 8.9],
    ["Tomas", "JS22", 28, 9.5],
];
console.log(klasiokai[0][3]);

//masyvai
let savaites_dienos = ["pirmadienis", "antradienis", "treciadienis", "ketvirtadienis"]
console.log(`savaites_dienos ilgis ${savaites_dienos.length}`);

//naujo nario idejimas i pabaiga
savaites_dienos.push("penktadienis");
console.log(`pakeistas masyvas ${savaites_dienos}`);

//konkrecios reiksmes istrynimas
savaites_dienos.splice(0, 1);
console.log(`pakeistas masyvas ${savaites_dienos}`);

//loopinimo metodai, iteravimas
console.log("foreach'inu masyva: ");
savaites_dienos.forEach(
    (gabaliukas, index)=>{
        console.log(` ${index+1} ${gabaliukas}`);
    }
);

//map metodas
savaites_dienos.map(lokalusKintamasis => {
    console.log(lokalusKintamasis);
});

//filter metodas

let atrinktaDiena = savaites_dienos.filter(reikalinga => reikalinga=='penktadienis');
console.log(atrinktaDiena);

//sort metodas
console.log(savaites_dienos.sort());

//slice metodas
let duomenuKopija = savaites_dienos.slice(0, 2);
console.log(duomenuKopija);

//concat metodas
console.log(savaites_dienos.concat(['sestadienis', 'sekmadienis']));


//kompleksine duomenu struktura masyve objektai
let zmogus = {
    vardas: "Deividas",
    grupe: "JS22",
    amzius: "100",
    vidurkis: "8.9"
}
console.log(zmogus.vardas);

let mokiniai = [
    {
    vardas: "Deividas",
    grupe: "JS22",
    amzius: "100",
    vidurkis: "8.9"
    },
    {
    vardas: "Jonas",
    grupe: "JS20",
    amzius: "30",
    vidurkis: "9.5"
    },
]
console.log(mokiniai[1].vardas);

//loopinimo metodai, iteravimas
mokiniai.forEach((item)=>{
    console.log(item.vardas);
});

//index of metodas
// let prekes = ["kamuolys", "lekstes", "telefonas", "kolonele", "lekstes", "telefonas", "saltiena", "paukstiena", "saldiklis", "kamuolys","telefonas"];

// console.log(prekes)

// let unikalus = [];

// prekes.map(item=>{
//   if(unikalus.indexOf(item) === -1){
//     unikalus.push(item)
//   }
// });

// console.log(unikalus)

//include metodas
let prekes = ["kamuolys", "lekstes", "telefonas", "kolonele", "lekstes", "telefonas", "saltiena", "paukstiena", "saldiklis", "kamuolys","telefonas"];

console.log(prekes)

let unikalus = [];

prekes.map(item=>{
  if (!unikalus.includes(item))
    unikalus.push(item);
});

console.log(unikalus)


// Ciklai
// let automobiliai=["VW","Audi", "Jeep", "MINI", "Subaru", "Mazda", "Fiat", "Seat", "Honda", "Nissan"];
// // for(let item of automobiliai){
// //     console.log(item);
// // }

// for(let i=0; i<automobiliai.length; i++){
//     console.log(` paprastas for loop'as ${automobiliai[i]}`);
// }

// let klasiokas = {
//     vardas: "Deividas",
//     klase: "JS22/2",
//     vidurkis: 2.5,
//     pomegiai: {
//         1:"vaikscioti",
//         2:"programavimas",
//         3:"tingejimas"}
// }
// for(let savybe in klasiokas){
//     console.log(savybe)
//     console.log(klasiokas[savybe])
//     console.log(typeof klasiokas[savybe]);


// if(typeof klasiokas[savybe] !== "object"){
//     console.log(savybe + " : " +klasiokas[savybe]);
// } else{
//     console.log(savybe + " yra -> vardinu: ")
//     for(let antras in klasiokas[savybe]){
//         console.log(antras+ " yra " + klasiokas[savybe][antras]);
//     }
// }
// }


let kursai = [
    {
        pavadinimas: "JS",
        aprasymas: "labai lengva programavimo kalba",
        lektorius: "Jolita",
        kaina: 200
    },
    {
        pavadinimas: "Java",
        aprasymas: "nelabai lengva programavimo kalba",
        lektorius: "Jonas",
        kaina: 350
    },
    {
        pavadinimas: "Python",
        aprasymas: "labai sunki programavimo kalba",
        lektorius: "Jon",
        kaina: 400
    },
]
// for/of skirtas masyvams
for(let i of kursai){
    // console.log(i);
    for(let j in i){
        // console.log(j);
        //console.log(`savybe: ${j} reiksme -> ${i[j]}`);
    }
}
// --------------------------------
let kurseliai = [
    {
        pavadinimas: "JS",
        aprasymas: "labai lengva programavimo kalba",
        lektorius: "Jolita",
        kaina: {
            akcija: 100,
            pagrindine: 200,
            galutine: 50
        },
        tag: ["js", "programing", "lengva"]
    },
    {
        pavadinimas: "Java",
        aprasymas: "nelabai lengva programavimo kalba",
        lektorius: "Jonas",
        kaina: {
            akcija: 150,
            pagrindine: 350,
            galutine: 70
        },
        tag: ["jv", "programingg", "nelabai"]
    },
    {
        pavadinimas: "Python",
        aprasymas: "labai sunki programavimo kalba",
        lektorius: "Jon",
        kaina: {
            akcija: 220,
            pagrindine: 400,
            galutine: 120
        },
        tag: ["py", "programinggg", "sunku"]
    },
]
for(let i=0; i<kurseliai.length; i++){
    //console.log(kurseliai[i]);
    for(let item in kurseliai[i]){
        // console.log(typeof kurseliai[i][item]);
        if(typeof kurseliai [i] [item] == 'object'){
            //sukam dar vien cikla

        }else{
            // reiskia kad ne object, tai tiesiog consolinam
            console.log(`${item} : ${kurseliai[i][item]}`)
        }
    }
    console.log("----------------");
}