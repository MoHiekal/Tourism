
function postcomment()
{
    var username=document.getElementById("name").value;
    var comment=document.getElementById("comment").value;
    var divpost=document.getElementById("divpost");
    divpost.innerHTML+="<h5>" +username+" :</h5><h4> "+comment+"</h4><br>";
    
}

function testloop()
{
    var divpost=document.getElementById("divpost");
    for(x=1; x<=6;x++)
        {
                divpost.innerHTML+="<h"+x+"> Hi </h"+x+">";
            
        }

}
function testBranching()
{
    var divpost =document.getElementById("divpost");
    var x=6;
    if(x==5)
       {
          divpost.innerHTML +="True <br>";
       }
    else
        {
            divpost.innerHTML+="False <br>";
        }
    divpost.innerHTML+="End of code";
}
function Crt()
{
    var inp=document.createAttribute("input");
    inp.setAttribute('type','button');
    inp.setAttribute('value','click Me');
    var myDiv=document.getElementById("divpost");
    document.body.appendChild(inp);
    
}
function exp()
{
    var srch=document.getElementById("srch");
    srch.style.width="200px";
}
function res()
{
    var srch=document.getElementById("srch");
    srch.style.width="10px";
}
function rem()
{
    var h=document.getElementById("n");
    h.parentNode.removeChild(h);
}
var x=5;
function myTimer(){
    var dv=document.getElementById("dv");
    if(x<=0){
        dv.innerHTML="<a href='#'>Done</a>";
    }
    else
        {
            dv.innerHTML=x;
        }
    x--;
    setTimeout("myTimer()",1000);
}