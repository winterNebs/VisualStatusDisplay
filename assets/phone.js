function axiosTest() {
    axios.get(window.location.href + "status")
    .then(function(data){
        console.log(data);
        let x = data.data;
        let status = x["status"];
        let room = x["room"];
        let reason = x["reason"];
        document.getElementById('displayedStatus2').innerHTML = status;
        document.getElementById('displayedRoom2').innerHTML = room;
        document.getElementById('displayedReason2').innerHTML = reason;
    });  
}

axiosTest();
setTimeout(function() { window.location.reload(true);}, 5000);
