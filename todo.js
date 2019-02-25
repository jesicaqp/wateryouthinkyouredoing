document.getElementById("add").onClick = function() 
{

    let text = document.getElementById("idea").value;

    let li = "<li>" + text + </li>;

    document.getElementById("list").appendChild(li);
}


