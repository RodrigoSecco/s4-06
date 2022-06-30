function newForEach(array, callback){
    let newArray=[]
    for(let i = 0; i<array.length; i++){
        newArray[i] = callback(array[i]);
    }
    return newArray;
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

function newIndexOf(array, elemento){
    for(let i = 0; i<array.length; i++){
        if(elemento===array[i]){
            return i;
        }
    }
    return -1;
}
 
function newIncludes(array, elemento){
    for(let i = 0; i<array.length; i++){
        if(elemento===array[i]){
            return true;
        }
    }
    return false;
}

function newReduce(array, acumulador){
    for(let i = 0; i<array.length; i++){
        acumulador = acumulador + array[i];
    }
    return acumulador;
}
