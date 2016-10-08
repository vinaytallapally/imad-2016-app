// counter code
var button=document.getElementById("counter");
var counter=0;
button.onclick = function()
{
    // making request to counter endpoint
    
    //capture the response and store it in variable
    
    // render the variable in  the correct span 
    var span=document.getElementById("count");
    counter=counter+1;
    span.innerHTML=counter.toString();
};