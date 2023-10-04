const person={
    name:"Mithun",
    age:21,
    address:{
        street:"BB, block c,Industrial Area.",
        city:"Sector 62,noida",
        state:"uttar pradesh",
    },
};
function extractdata(obj){
    const {
        name,
        address:{street},
    }=obj;
    return {name,street};
}
console.log(extractdata(person));