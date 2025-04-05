document.addEventListener("DOMContentLoaded", () => {
    console.log("JChat is ready!");
});
function postStory() {
    let storyText = document.getElementById("storyInput").value;
    if (storyText.trim() === "") {
        alert("Please write something before posting!");
        return;
    }

    // Create a new story item
    let newStory = document.createElement("li");
    newStory.innerText = storyText;

    // Add story to the list
    document.getElementById("storyList").appendChild(newStory);

    // Clear input box
    document.getElementById("storyInput").value = "";

    alert("Your story has been posted!");
}
function postComment() {
    let commentText = document.getElementById("commentInput").value;
    if (commentText.trim() === "") {
        alert("Please write a comment before posting!");
        return;
    }

    let newComment = document.createElement("li");
    newComment.innerText = commentText;
    document.getElementById("commentList").appendChild(newComment);
    
    document.getElementById("commentInput").value = ""; 
    alert("Your comment has been posted!");
}
