// counter code
var button=document.getElementById("counter");
button.onclick = function()
{
    // create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            // Take action
            if(request.status===200)
            {
                var counter=request.responseText;
                 var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
        // not done yet
        
    };
    // Make the request
    request.open('GET','http://vinaytallapally.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_button');
submit.onclick=function(){
    //making request to the server 
     // create a request object
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            // Take action
            if(request.status===200) // after request is successful this executes
            {
  //capture a list of names and render the list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
   var ul=document.getElementById("namelist") ;
   ul.innerHTML=list;
            }
        }
        // not done yet
    };
    // Make the request
    request.open('GET','http://vinaytallapally.imad.hasura-app.io/submit-name?name='+name ,true);
    request.send(null);
};