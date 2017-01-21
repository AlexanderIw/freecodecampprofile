/*dont judge me. i am new to javascript*/
var x = Math.floor((Math.random() * 10) + 1);//1-10
var y = Math.floor((Math.random() * 10) );//0-9
var correctAnswer= (x+y).toString();
document.getElementById("question").innerHTML=x+" + "+y;

document.getElementById("submit").addEventListener("click", function(){
    //if the funcgtion been click
    var email= document.getElementById("email").value;
    var answer= document.getElementById("userinput").value;
    var ourForm= document.getElementById("theform");
    var front= document.getElementById("frontcard");
    var back = document.getElementById("backcard");

    if(email ===""){
        ourForm.innerHTML+="<p style=\"color:red;\"> Invalid email </p>";
    }
    if(answer!==correctAnswer){
            ourForm.innerHTML+="<p style=\"color:red;\"> incorrect answer </p>";
    }
    if( parseInt(answer)===(x+y) ){
        console.log("what did i find="+front);
        front.classList.add("invisible");
        back.classList.remove("invisible");
    }
});
