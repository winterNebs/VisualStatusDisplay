export { showEditor, changeReasonText, changeStatusText, changeRoomText};
var status = ""
var room = ""
var reason = ""

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
    status = result
    document.getElementById('displayedStatus').innerHTML = result;
    let payload = {status: status, room: room, reason: reason,};
    axios.put('http://192.168.0.181:3000/display/1', payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
document.querySelector('input[value="UpdateStatus"]').addEventListener('click',changeStatusText);
function changeReasonText()
{
    var updatedReason = document.getElementById('reasonText').value;
    reason = updatedReason;
    document.getElementById('displayedReason').innerHTML = updatedReason;
    let payload = {status: status, room: room, reason: reason,};
    axios.put('http://192.168.0.181:3000/display/1', payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
document.querySelector('input[value="UpdatedReason"]').addEventListener('click',changeReasonText);

function changeRoomText()
{
    var updatedRoom = document.getElementById('roomText').value;
    room = updatedRoom;
    document.getElementById('displayedRoom').innerHTML = updatedRoom;
    let payload = {status: status, room: room, reason: reason,};
    axios.put('http://192.168.0.181:3000/display/1', payload)
    .then(response=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
document.querySelector('input[value="UpdatedRoom"]').addEventListener('click',changeRoomText);



