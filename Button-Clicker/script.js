function login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Log Out";
    } else {
        element.innerText = "Login"
    }
}
function likes() {
    alert("Ninja was liked!");
}
function add_def(element) {
    element.remove();
}