//QUESTION NO:45
//Cars: Write a function that stores information about a car in a Object...ETC

//ANSWER...
function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[key : string]:any }[]){

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};
let ans = storeCarInfo('Honda', 'Civic', {color:'Black'}, {features: ['navigations', 'power window']});
console.log(ans);