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
#commentSection {
    text-align: center;
    background: #fff;
    padding: 20px;
    margin: 20px auto;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

input {
    width: 70%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#commentList {
    list-style-type: none;
    padding: 0;
    text-align: left;
}

#commentList li {
    background: #f8f9fa;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
}
