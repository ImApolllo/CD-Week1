var likes = [9, 12, 9];
var postLikes = [
    document.querySelector("#likes-1"),
    document.querySelector("#likes-2"),
    document.querySelector("#likes-3")
];

function likeIncrease(postID){
    likes[postID]++;
    postLikes[postID].innerText = likes[postID] + " Like(s)";
}