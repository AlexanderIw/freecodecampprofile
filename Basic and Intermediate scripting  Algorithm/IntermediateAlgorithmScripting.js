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
    };

    if(str.length>=4){
        //-3 because we want all number that are in the thousand place
        over9thousand=str.slice(0, str.length-3);
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
//p3:test case
/*console.log("My favorite Final Fantasy= "+convertToRoman(7));
//console.log(convertToRoman(5145));
//console.log(convertToRoman(501));
//console.log(convertToRoman(3999));*/

//-----p4: Wherefore art thou---------------------//
/*Description:Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair of 
the source object has to be present in the object from the collection if it is 
to be included in the returned array.*/
function whatIsInAName(collection, source) {
    var arr = [];
    var compareMyObject= function(obj, sourceObj){
        var count=0;
        for(var sourceKey in sourceObj){
            for(var key in obj){
                if(sourceKey===key && sourceObj[sourceKey]===obj[key]){
                    count++;
                    break;
                }
            }
        }
        return count===Object.keys(sourceObj).length;
    }
    for(var i=0; i<collection.length; i++){
        if(compareMyObject(collection[i], source)){
            arr.push(collection[i]);
        }
    }
    return arr;
}
//p4:test case
/*console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
{ "a": 1, "b": 2 }));*/

//-----p5: Search and Replace ----------------------------------//
/*Description: Perform a search and replace on the sentence using
 the arguments provided and return the new sentence and preserve the 
 cases of the swap word.*/

 function myReplace(str, before, after) {
     var reg= new RegExp(before, "i");
     if(before[0]===before[0].toUpperCase()){//if cap
         after=after.charAt(0).toUpperCase()+after.slice(1);
     }
    return str.replace(reg, after);
}
////p5:test case
/*console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));*/

//-----p6:Pig Latin------------------------------------------------//
/*Pig Latin takes the first consonant (or consonant cluster) of an English word,
 moves it to the end of the word and suffixes an "ay".*/
 function translatePigLatin(str) {
     var vowels= ['a','e','i','o','u'], index=0;

     if(vowels.indexOf(str[index])!== -1){  //initial edge case
         return str+"way";
     }

     for(index=1;index<str.length;index++){
         if(vowels.indexOf(str[index]) !==-1){//first vowel found
             //console.log("index= "+ index+" ");
             break;
        }
     }
  return str.slice(index,str.length)+str.slice(0, index)+"ay";
}

//p6 test
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));