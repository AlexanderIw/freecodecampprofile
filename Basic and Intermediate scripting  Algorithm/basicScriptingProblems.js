/*solving free code camp basic scripting problems */

//reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
//n!
function factorialize(num) {
  var fac=1;
  for(var i=num;i>=1;i--){
    fac*=i;
  }
  return fac;
}

//Check for Palindromes 
function palindrome(str) {
	var newStr= str.toLowerCase().split(/[^a-z0-9]/g).join("");
	var revStr= newStr.split("").reverse().join("");
	//console.log("new string= "+ newStr+" reverse string= "+ revStr);
	return (newStr==revStr);
}

//find longest word in a string
function findLongestWord(str) {
  var ary=str.split(" ").map(function(word){
    //console.log("word= "+ word);
    return word.length;
  }).sort(function(a,b){return a-b;});

  return ary.pop();
}

function largestOfFour(arr) {
  var ary=[];
  arr.forEach(function(miniary){
  	console.log("ary= "+miniary);
  	ary.push(miniary.sort(function(a,b){return a-b;}).pop());
  });
  return ary;
}

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var str1="abc";
  for(var i=0; i<3;i++){
    str1=str1.concat(str1);
  }
  console.log(str1);
  //console.log(str.substring(str.length-target.length));
  return str.substring(str.length)===target;
}


function truncateString(str, num) {
  // Clear out that junk in your trunk
  var x=(num<=3)? 0 : 3;
  return (str.length>num)?str.slice(0, num-x)+"...":str;
}

function chunkArrayInGroups(arr, size) {
  var ary=[];
  for(var i=0; i<arr.length;i+=size){
  	//in java this would of been array out of bounds
  	//console.log(arr[i]+" "+arr[i+size-1]);
    ary.push(arr.slice(i,i+size));
  }
  return ary;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

/*match array elements*/
function mutation(arr) {
  var count=0;
  var str1=arr[0].toLowerCase(), 
      str2=arr[1].toLowerCase();

  for(var i=0; i<str2.length;i++){
    if(str1.indexOf(str2[i]) !==-1){
      count++;
    }
  }
  return (count===str2.length);
}

//Remove all falsy values from an array.
function bouncer(arr) {
 //console.log("eval= "+ (false==bNull));
  return arr.filter(function(val){
    return (Boolean(val)!==false);
  });
}
//Seek and Destroy
function destroyer(arr) {
  //arguments is not an array. one has to convert it.
  //var newAry= [...arguments].splice(1);//...only work ES6
  var newAry= Array.from(arguments).splice(1);
  //console.log(newAry);
  return arr.filter(function(aryEle){
    return (newAry.indexOf(aryEle)=== -1);
  });
}
//Where do I belong Complete
function getIndexToIns(arr, num) {
  var index=0;
  arr.sort(function(a,b){
    return a-b;
  });

  while(index<arr.length){
    if(num>arr[index]){
      index++;
    }else{
      break;
    }
  }
  return index;
}
//Caesars Cipher
function rot13(str) {
  var aryOfStr=str.split(" "), resultArray=[],
      num=0;

  for(var i =0; i<aryOfStr.length;i++){
    for(var j=0;j<aryOfStr[i].length;j++){
      num=aryOfStr[i].charCodeAt(j);  //get the unicode decimal value

      //77=90-13 and 91 from unicode decimal 65-90(A-Z)
      if(num <65 || num>90){ 
        resultArray.push(num); //it's an alphabet charachter A-Z
      }
      else{
        resultArray.push((num>77)? 65+((num+13)%91) : (num+13)%91 );
      }
    }
    //console.log("new string= "+ resultArray);
    aryOfStr[i]=String.fromCharCode.apply(this, resultArray);
    //console.log("aryOfStr[i]= "+ aryOfStr[i]);
    resultArray=[];   //reset the array for the next string
  }
  return aryOfStr.join(" ");
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

/*---complete problems function calls
//console.log(reverseString("Welcome"));
//console.log(factorialize(5));
//console.log(palindrome("race car"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
//console.log(truncateString("A-", 1));
//confirmEnding("He has to give me a new name", "name");
//console.log(rot13("SERR YBIR?"));
//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//console.log(bouncer([1, null, NaN, 2, undefined]));
//console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
the end---*/