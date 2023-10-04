function extract(arr){
    const[first,second, , , , , last ]=arr;
    return[first,second,last];
}

const array=[1,2,3,4,5,6];
console.log(extract(array));


//*****************************************MIN AND MAX VALUE********************************************************* */
function maxMin(arr){
    return{
        max:Math.max(...arr),
        min:Math.min(...arr),
    };
}

const array1=[4,5,6,2,5,4,9];
console.log(maxMin(array1));