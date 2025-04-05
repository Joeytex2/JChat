let likeCounter = 0;
let reactions = {};
const trendingStories = [
    "JChat is taking over the internet!",
    "The best storytelling platform is here.",
    "Share your thoughts with the world!"
];

// Load Trending Stories
document.addEventListener("DOMContentLoaded", () => {
    let trendingList = document.getElementById("trendingList");
    trendingStories.forEach(story => {
        let listItem = document.createElement("li");
        listItem.innerText = story;
        trendingList.appendChild(listItem);
    });
});

// Story Posting Function
function postStory() {
    let storyText = document.getElementById("storyInput").value;
    if (storyText.trim() === "") {
        alert("Please write something before posting!");
        return;
    }

    let newStory = document.createElement("li");
    newStory.innerText = storyText;
    document.getElementById("storyList").appendChild(newStory);
    
    document.getElementById("storyInput").value = "";
    alert("Your story has been posted!");
}

// Comment Posting Function
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

// Reaction Function
function react(emoji) {
    if (!reactions[emoji]) {
        reactions[emoji] = 0;
    }
    reactions[emoji]++;
    
    let reactionText = "Reactions: ";
    for (let key in reactions) {
        reactionText += `${key} ${reactions[key]} `;
    }
    
    document.getElementById("reactionCount").innerText = reactionText;
}
