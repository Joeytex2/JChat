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
document.addEventListener("DOMContentLoaded", () => {
    // Handle User Registration
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            
            localStorage.setItem("user", JSON.stringify({ username, email }));
            alert("Account created successfully! Please log in.");
            window.location.href = "login.html";
        });
    }

    // Handle User Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let savedUser = JSON.parse(localStorage.getItem("user"));
            let loginEmail = document.getElementById("loginEmail").value;
            
            if (savedUser && savedUser.email === loginEmail) {
                alert("Login successful! Welcome back, " + savedUser.username);
                window.location.href = "profile.html";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});
function showNotification(message) {
    let notificationBox = document.createElement("div");
    notificationBox.innerText = message;
    notificationBox.classList.add("notification");

    document.body.appendChild(notificationBox);
    
    setTimeout(() => {
        notificationBox.remove();
    }, 3000);
}

// Update existing functions to trigger notifications
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

    showNotification("📢 Your story has been posted!");
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

    showNotification("💬 New comment posted!");
}

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
    
    showNotification(`🔥 Someone reacted with ${emoji}!`);
        }
function sendMessage() {
    let messageText = document.getElementById("chatInput").value;
    if (messageText.trim() === "") {
        alert("Please type a message before sending!");
        return;
    }

    let chatBox = document.getElementById("chatBox");
    let newMessage = document.createElement("p");
    newMessage.innerText = "You: " + messageText;
    chatBox.appendChild(newMessage);

    document.getElementById("chatInput").value = "";
}
function sendDirectMessage() {
    let selectedUser = document.getElementById("userSelect").value;
    let messageText = document.getElementById("chatInput").value;
    if (messageText.trim() === "") {
        alert("Please type a message before sending!");
        return;
    }

    let chatBox = document.getElementById("chatBox");
    let newMessage = document.createElement("p");
    newMessage.innerText = `To ${selectedUser}: ${messageText}`;
    chatBox.appendChild(newMessage);

    document.getElementById("chatInput").value = "";

    showNotification(`💬 Message sent to ${selectedUser}!`);
}
