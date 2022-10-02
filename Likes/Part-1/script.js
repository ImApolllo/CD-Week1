var likeCounter = 3;
var likeHeader = document.querySelector(".likes");

function likeIncrease() {
    likeCounter++;
    console.log(likeCounter)
    likeHeader.innerText = likeCounter + " Like(s)";
}