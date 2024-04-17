function generateRandomArray() {
    const nilaiAcak = []
    for (let i = 0 ; i <100 ; i++){
        nilaiAcak.push(Math.floor(Math.random() *50)+1);
    }
    return nilaiAcak;
}
let hasilArray = generateRandomArray();
console.log(hasilArray);

let ganjil =[]
let genap =[]
for(i=0 ; i < hasilArray.length ; i++){
    if (hasilArray[i] % 2 == 0){
        ganjil.push(i);
    }
}
console.log(ganjil);
console.log(genap);

//to do membuat nilai min max average


