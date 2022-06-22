function newForEach(array, callback){
    for(let i = 0; i<array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}

function newMap(array, callback){
    let newArray=[];
    for(let i=0; i<array.length; i++){
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

function newFilter(array, callback){
    let newArray=[];
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            newArray[i] = array[i];
        }
    }
    return newArray;
}

function newFind(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            return array[i];
        }
    }
}

function newIndexOf(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            return i;
        }
    }
    return -1;
}
 
function newIncludes(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            return true;
        }
    }
    return false;
}

function newReduce(array){
    let soma = 0;
    for(let i = 0; i<array.length; i++){
        soma = array[i];
    }
    return soma;
}