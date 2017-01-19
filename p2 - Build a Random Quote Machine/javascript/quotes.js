var randomQuotes= function (){
    var prev=[], curr=0;
    var quoteElem = document.getElementById("quote"),
        nameElem= document.getElementById("name"),
        shareTwitterQuote=document.getElementById("twitterShareBtn");
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var arrayOfQuotes=[
        {"name":"Elon Musk","quote":"If something is important enough, even if the odds are against you, you should still do it"},
        {"name":"Elon Musk","quote":"The first step is to establish that something is possible; then probability will occur."},
        {"name":"Elon Musk","quote":"I could either watch it happen or be part of it"},
        {"name":"Steve Jobs","quote":"Have the courage to follow your heart and intuition. They somehow know what you truly want to become."},
        {"name":"Steve Jobs","quote":"The people who are crazy enough to think they can change the world are the ones who do."},
        {"name":"Steve Jobs","quote":"I want to put a ding in the universe."},
        {"name":"Steve Jobs","quote":"Stay hungry, stay foolish."},
        {"name":"Dr. Seuss", "quote":"Don't cry because it's over, smile because it happened."}, 
        {"name":"Mahatma Gandhi", "quote":"Be the change that you wish to see in the world."}, 
        {"name":"Robert Frost", "quote":"In three words I can sum up everything I've learned about life: it goes on"}, 
        {"name":"Mark Twain", "quote":"If you tell the truth, you don't have to remember anything."}, 
        {"name":"Albert Einstein", "quote":"Try not to become a man of success, but rather try to become a man of value."},
        {"name":"Albert Einstein", "quote":"The true sign of intelligence is not knowledge but imagination"},
        {"name":"Albert Einstein", "quote":"I have no special talent. I am only passionately curious."},
        {"name":"John Johnson", "quote":"First, solve the problem. Then, write the code."},
        {"name":"Larry Flon", "quote":"There is no programming language–no matter how structured–that will prevent programmers from making bad programs."},
        {"name":"Linus Torvalds", "quote":"Software is like sex: It’s better when it’s free."},
        {"name":"Jeff Atwood", "quote":"In software, we rarely have meaningful requirements.  Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is."},
    ];

    //default values
    curr=getRandomNumber(0, arrayOfQuotes.length);
    quoteElem.innerHTML=arrayOfQuotes[curr].quote;
    nameElem.innerHTML=arrayOfQuotes[curr].name;

    //Event listener
    document.getElementById("nextQuote").addEventListener("click", function(){
        prev.push(curr);
        curr= getRandomNumber(0, arrayOfQuotes.length);
        quoteElem.innerHTML=arrayOfQuotes[curr].quote;
        nameElem.innerHTML=arrayOfQuotes[curr].name;
    });

    document.getElementById("prevQuote").addEventListener("click", function(){
        if( prev.length<1){
            console.log("i should make here");
            return 0;
        }
        curr= prev.shift();
        quoteElem.innerHTML=arrayOfQuotes[curr].quote;
        nameElem.innerHTML=arrayOfQuotes[curr].name;
    });

   shareTwitterQuote.addEventListener("click", function(){
       
        shareTwitterQuote.setAttribute("href",
        "https://twitter.com/intent/tweet?"+
        "hashtags=FCC,randomQuotes&%20"+
        //"original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&"+
        //"ref_src=twsrc%5Etfw&"+
        "related=twitterapi%2Ctwitter&"+
        "text="+arrayOfQuotes[curr].quote+"%20-"+arrayOfQuotes[curr].name+"&tw_p=tweetbutton&"+
        //"url=https%3A%2F%2Fniquepg.com%2Fquotes&"+
        "via=niquepg");   
        
    });
}
 window.onload = function(){
    randomQuotes();
 };