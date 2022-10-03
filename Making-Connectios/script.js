console.log("page loaded...");
var avatar = document.querySelector(".name");
var requests = 2;
var connections = 418;

function changeName() {
    avatar.innerText = "Jahn Smith"
}
function accept(element) {
    var item = document.querySelector(element);
    item.remove();
    connections++;
    var req = document.querySelector("#request");
    req.innerText = connections;

    requests--;
    var con = document.querySelector("#connect");
    con.innerText = requests;
}
function decline(element) {
    var item = document.querySelector(element);
    item.remove();
    
    requests--;
    var con = document.querySelector("#connect");
    con.innerText = requests;
}