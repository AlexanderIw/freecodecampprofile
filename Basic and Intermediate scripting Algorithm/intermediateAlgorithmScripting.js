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
        over9thousand="", placeValue=0;

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
        //-3 because we want all number that are in the thousand place or higher
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
             break;
        }

     }
  return str.slice(index,str.length)+str.slice(0, index)+"ay";
}
//p6 test
/*console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));*/

//-----P7:DNA Pairing--------------------------------------//
/*Description:The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 
2d array.Base pairs are a pair of AT and CG. Match the missing 
element to the provided character.Return the provided character
 as the first element in each array.*/
function pairElement(str) {
    var resultAry= [];
    var myGeneticInformationDataEncoder={
        "A":["A","T"],
        "T":["T","A"],
        "C":["C","G"],
        "G":["G","C"]
    };

    for(var i=0; i<str.length;i++){
        resultAry.push(myGeneticInformationDataEncoder[str[i]]);
    }
  return resultAry;
}
//p7 test
/*console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));*/

//-----P8:Missing letters--------------------------------------//
/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
    var ascii=str.charCodeAt(0);
    if(ascii!==97 && ascii!==65){return undefined; }

    for(var i=0; i <str.length;i++){
        if(ascii!==str.charCodeAt(i))
            break;  //next letter is not correct
        ascii++;//next letter
    }
  return String.fromCharCode(ascii);
}
//P8 test
/*console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcd"));*/

//-----P9:Boo who--------------------------------------//
/*Check if a value is classified as a boolean primitive. 
Return true or false.Boolean primitives are true and false.*/
function booWho(bool) {
    return typeof(bool)==="boolean";
}
//p9 test
/*console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));*/

//-----P10:Sorted Union--------------------------------------//
/*Description:Write a function that takes two or more arrays and returns 
a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their 
original order, but with no duplicates in the final array.*/
function uniteUnique(arr){
    var args = Array.from(arguments);//arguments is not array
   
    var flattenedArray = args.reduce(function(a, b) {
        return a.concat(b);
    },[]);
    //console.log("flattenedArray= "+flattenedArray);

    return Array.from(new Set(flattenedArray));//a set contains all unique values
}
//p10 test
/*console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));*/

//-----P11:Convert HTML Entities------------------------------------//
/*Description:Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 in a string to their corresponding HTML entities.*/
function convertHTML(str){
    var reg=/[^a-zA-Z0-9 ]/g;
    var lookupTable={
        "&":"&amp;", 
        "<":"&lt;",
        ">":"&gt;", 
        "\"":"&quot;", 
         "\'":"&apos;"
    };
  
    var replace=function (match){
        return lookupTable[match];
    };
    //if there more than on match it will be repass to the function
    return str.replace(reg, replace);
}

/*p11 test
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));*/

//-----p12: Spinal Tap Case V0.1--------------------------------------//
/*Description:Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //i hate my solution... need to go study regular expressions.going to resolve this one later 
    //with better regular expression should be able to Simplify this function
    return str.split(/(?=[A-Z])/).map(function(s, index, ary) {
         if(s.match(/[\s_]/g)!==null){
              return s.replace(/[\s_]/g,"-");
            }
         else{ 
             if(index<ary.length-1){
                return s+"-";
             }else{
                 return s;
             }
         }
    }).join("").toLowerCase();
}
/*p12 test
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));*/

//-----P13: Sum All Primes----------------------------------------//
/*Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, 
one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.*/
function sumPrimes(num) {
    //my implementation of Sieve of Eratosthenes
    var aryprime= [], 
        sqrtnum= Math.floor(Math.sqrt(num)),
        n=0, sum=0, i=0, j=0;

    for(i =2; i<=num;i++){  //initially all set to true 2 to n
        aryprime[i]=true;
    }

    for(i=2; i<=sqrtnum;i++){
        if(aryprime[i]===true){
            for(j=Math.pow(i,2);j<=num;j=Math.pow(i,2)+(n*i)){
                aryprime[j]=false;
                n++;
            }
        }
        n=0;
    }

    for(i=2;i<=num;i++){
        if(aryprime[i]===true){
           //console.log(i);
           sum+=i;
        }
    }
  return sum;
}

/*p13 test
console.log(sumPrimes(10));
console.log(sumPrimes(977));*/

//-----P14:Sum All Odd Fibonacci Numbers v1------------------------------//
/*Given a positive integer num, return the sum of all odd
Fibonacci numbers that are less than or equal to num.*/
//note to self: relean about Memoization 
function sumFibs(num) {
    var fib1=0,fib2=1, fib3=0;
    var sum = fib2;

    for(var i=0; i<num-1; i++){
        fib3=fib1+fib2;
        fib1=fib2;
        fib2=fib3;

        if(fib3%2!==0 && fib3<=num){
            sum+=fib3;
        }
    }
  return sum;
}

/*p14 test
console.log(sumFibs(1000));
console.log(sumFibs(4));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));*/

//-----P15:Smallest Common Multiple v1------------------------------//
/*Find the smallest common multiple of the provided parameters that 
can be evenly divided by both, as well as by all sequential numbers 
in the range between these parameters.the range will be an array of
two numbers that will not necessarily be in numerical order.*/
function smallestCommons(arr) {
    var minval = Math.min(arr[0], arr[1]),
        maxval = Math.max(arr[0], arr[1] );
    var num =minval, multiple=maxval,
        rangeArrLength=maxval-minval;  
    var rangeArry = [];

    for(var i=0; i<rangeArrLength; i++){
        rangeArry.push(num++);
    }

    function isLCMAndRangeBetween(key , arr){
        for(var i=0; i< arr.length; i++){
            if(key%arr[i]!==0){
                return false;
            }
        }
        return true;
    }
    /*loop is danagerous because it could lead to infinite
    if input are larger than variable could hold*/
    while(!isLCMAndRangeBetween(multiple, rangeArry)){
        multiple+=maxval;
    }
  return multiple;
}
//-----P15:Smallest Common Multiple v2: better version--------------------//
function smallestCommonsVersion2(arr) {
    var minval = Math.min(arr[0], arr[1]),
        maxval = Math.max(arr[0], arr[1] );
    var num =minval, multiple=0,
        rangeArrLength=maxval-minval;  
    var rangeArry = [];

    for(var i=0; i<=rangeArrLength; i++){
        rangeArry.push(num++);
    }

    function gcd(a,b){
        var t=0;
        while(b !==0){
            t = b;
            b = a%b;
            a=t;
        }
        return a;
    }
    function lcm( a,b){
        return (a*b)/gcd(a,b);
    }
    
    multiple=rangeArry[0];
    for(var j=1; j<=rangeArrLength;j++){ 
        //extending lcm= a*b/gcd(a,b) --> lcm_final=a[i]*m/gcd(a[i],m)
        multiple= lcm(rangeArry[j],multiple);
    }
  return multiple;
}

/*p15 test for v1 and v2
console.log(smallestCommonsVersion2([1, 13]));
console.log(smallestCommonsVersion2([1, 5]));
console.log(smallestCommonsVersion2([23, 18]));*/

//-----P16:Finders Keepersv1------------------------------//
/*Create a function that looks through an array (first argument) and returns the first 
element in the array that passes a truth test (second argument).*/
function findElement(arr, func) {
    //although filter goes throw the entire array. which bit inefficient for this prohblem
    //We have simple solution as trader off~
    return arr.filter(func).shift();
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

//-----P17:Drop it ---------------------------------------//
/*Description:Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.
-The second argument, func, is a function you'll use to test the first elements
 of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/
function dropElements(arr, func) {
    for (var i=0; i<arr.length; i++){
        if(func(arr[i])===true){
            break;
        }else{
            arr.splice(i,1);// remove a single element at the ith position
            i--;// handle the offset of the array decreasing by one
        }
    }
    return arr;
}
//P17: test functions//
/*console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));*/

/*Drop the elements of an array (first argument), starting from the front,
until the predicate (second argument) returns true.
-The second argument, func, is a function you'll use to test the first 
elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/
function steamrollArray(arr) {
/*
    var index=0;
    while(Array.isArray(arr[index])){

        arr =arr.reduce(function(a, b) {
            return a.concat(b);
        }, []);
    }
    */
     return arr;
 }
   


//console.log(steamrollArray([[["a"]], [["b"]]]));//should return ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]]));