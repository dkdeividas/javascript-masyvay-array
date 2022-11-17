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
mokiniai.forEach((item, index)=>{
    console.log(item.vardas);
});
