function showEditor()
{
    var x = document.getElementById("hideDiv")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block";
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