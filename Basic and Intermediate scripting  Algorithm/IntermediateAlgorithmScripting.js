//**Solving Intermediate Algorithm Scripting**//

//-----p1: Sum All Numbers in a Range//
/*Description:We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.*/
function sumAll(arr) {
    var sum=0, maxNum= Math.max.apply(null, arr),
        minNum= Math.min.apply(null,arr);
 
    for(var i=minNum;i<=maxNum;i++){
        sum=sum+i;
    }
    return sum;
}
//P1: test case
/*console.log(sumAll([1, 4])); ///10
console.log(sumAll([5, 10]));//45
console.log(sumAll([10, 5]));//45*/

//-----p2: Diff Two Arrays-----------//
/*Description: Compare two arrays and return a new array with any 
items only found in one of the two given arrays, but not both. In 
other words, return the symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
    var index=0;
    var newArray= arr1.filter(function(val){
        index=arr2.indexOf(val);
        if(index===-1){//does not exist
            return val;
        }else{
            arr2.splice(index,1);//it exist remove from array
        }
    });
    //if it was not remove. it is an unique element implys no difference 
    return newArray.concat(arr2);
}
//p2:test case
/*console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["diorite", "pink wool"].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//should return [4]*/

//-----P3: Roman Numeral Converter-------------//
/*Convert the given number into a roman numeral.*/

function convertToRoman(num) {
    var resultAry=[], str=num.toString(),
        over9thousand="", placeValue=0;;

    var helperDictionary={
        "1":"I","2":"II", "3":"III","4":"IV","5":"V",
        "6":"VI","7":"VII","8":"VIII","9":"IX","10":"X",
        "20":"XX","30":"XXX","40":"XL","60":"LX","70":"LXX",
        "80":"LXXX","90":"XC","100":"C","200":"CC",
        "300":"CCC","400":"CD","500":"D","600":"DC",
        "700":"DCC","800":"DCCC","900":"CM", "1000":"M"
    };

    var letterMaker = function(n,str){
        return new Array(n).join(str); 
    }

    if(str.length>=4){
        //-3 because we want all number that are in the thousand place
        over9thousand=str.slice(0, str.length-3);
        console.log(over9thousand);
        resultAry.push(letterMaker(parseInt(over9thousand)+1, 
                helperDictionary["1000"]));
        
        str=str.slice(str.length-3); //update
    }

    placeValue=str.length;
    for(var i=0;i<str.length;i++){
        resultAry.push(helperDictionary[str[i]+letterMaker(placeValue,"0")]);
        placeValue--;
    }
    return resultAry.join("");
}

//console.log(convertToRoman(9));
console.log(convertToRoman(5145));
//console.log(convertToRoman(501));
//console.log(convertToRoman(1006));
//console.log(convertToRoman(3999));