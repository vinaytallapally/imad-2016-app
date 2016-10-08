// counter code
var button=document.getElementById("counter");
button.onclick = function()
{
    // create a request object
    var request=new XMLhttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLhttpRequest.Done)
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
    request.send('null');
};