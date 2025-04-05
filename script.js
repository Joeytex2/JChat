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
