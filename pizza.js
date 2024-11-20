const pizzaPacks= [
    {name: "Small", price: "15", slices: "10"},
    {name: "Medium", price: "25", slices: "20"},
    {name: "Large", price: "35", slices: "30"},
    {name: "Extra-Large", price: "50", slices: "50"},
];

const person = 10;
const slices = 3;
const totalSlices = person*slices;
const packDetails = [];

pizzaPacks.forEach(pack => {
    const packs = Math.ceil(totalSlices/pack.slices);
    const cost = packs*pack.price;
    const left = (pack.slices*packs) - totalSlices;
    packDetails.push({name: pack.name, packs, cost, left});
})

let highlightPack = packDetails[0];
packDetails.forEach(highlight => {
    if(highlight.cost < highlightPack.cost){
        highlightPack = highlight;
    }
})

console.log("Total "+totalSlices+" Slices Need");
packDetails.forEach(detail => {
    console.log(detail.name+"Package \t Packs : "+detail.packs+" Cost : "+detail.cost+" Left : "+detail.left);
})
console.log("Highlighted Pack is : "+highlightPack.name);