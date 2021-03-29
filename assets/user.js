export { showEditor, changeReasonText, changeStatusText, changeRoomText};
var status = ""
var room = ""
var reason = ""

window.onload = function () {
    axios.get(window.location.href + "status")
    .then(function(data){
        console.log(data);
        let x = data.data;
        status = x["status"];
        room = x["room"];
        reason = x["reason"];
        document.getElementById('displayedStatus').innerHTML = status;
        document.getElementById('displayedRoom').innerHTML = room;
        document.getElementById('displayedReason').innerHTML = reason;
    });  
}
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
document.querySelector('button').addEventListener('click',showEditor);

document.querySelector('#statusText').addEventListener('change',changeStatusText);
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
        var result = updatedStatus.fontcolor("#F5CE0B") 
    }
    else{
        var result = updatedStatus.fontcolor("black")
    }
    status = result
    document.getElementById('displayedStatus').innerHTML = result;
    let payload = {status: status, room: room, reason: reason,};
    axios.put(window.location.href, payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
document.querySelector('#reasonText').addEventListener('input',changeReasonText);
function changeReasonText()
{
    var updatedReason = document.getElementById('reasonText').value;
    reason = updatedReason;
    document.getElementById('displayedReason').innerHTML = updatedReason;
    let payload = {status: status, room: room, reason: reason,};
    axios.put(window.location.href, payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
document.querySelector('#roomText').addEventListener('input',changeRoomText);
function changeRoomText()
{
    var updatedRoom = document.getElementById('roomText').value;
    room = updatedRoom;
    document.getElementById('displayedRoom').innerHTML = updatedRoom;
    let payload = {status: status, room: room, reason: reason,};
    axios.put(window.location.href, payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}




