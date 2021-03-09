const e = require("express");

function addPerson()
{
    var name=document.personList.name.value;
    var status=document.personList.status.value;
        if(name.length>0){
            var tr = document.createElement('tr');

            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));

            td1.innerHTML=name;
            td2.innerHTML=status;
            document.getElementById("peopleTable").appendChild(tr);
        }
}
function changeStatusText()
{
    var updatedStatus = document.getElementById('statusText').value;
    if (updatedStatus === "Available"){
        var result = updatedStatus.fontcolor("green") 
    }
    else if (updatedStatus === "Unavailable"){
        var result = updatedStatus.fontcolor("grey") 
    }
    else if (updatedStatus === "Busy"){
        var result = updatedStatus.fontcolor("red") 
    }
    else if (updatedStatus === "Away"){
        var result = updatedStatus.fontcolor("yellow") 
    }
    else{
        var result = updatedStatus.fontcolor("black")
    }
    document.getElementById('displayedStatus').innerHTML = result;
}
function changeReasonText()
{
    var updatedReason = document.getElementById('reasonText').value;
    document.getElementById('displayedReason').innerHTML = updatedReason;
}
function changeRoomText()
{
    var updatedRoom = document.getElementById('roomText').value;
    document.getElementById('displayedRoom').innerHTML = updatedRoom;
}