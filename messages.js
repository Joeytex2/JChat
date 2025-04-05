import { db } from "./firebase-config.js";
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore";

// Send Message
async function sendDirectMessage(selectedUser, messageText) {
    if (messageText.trim() === "") {
        alert("Please type a message before sending!");
        return;
    }

    try {
        await addDoc(collection(db, "messages"), {
            to: selectedUser,
            message: messageText,
            timestamp: new Date(),
            read: false // Message starts as unread
        });

        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

// Fetch Messages & Update Read Receipts
async function displayChatHistory(user) {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = ""; // Clear previous content

    const q = query(collection(db, "messages"), where("to", "==", user));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docSnap) => {
        const messageData = docSnap.data();
        let messageText = `${messageData.message} ${messageData.read ? "✅ Seen" : "⏳ Unread"}`;

        let newMessage = document.createElement("p");
        newMessage.innerText = messageText;
        chatBox.appendChild(newMessage);

        // Mark message as read
        const docRef = doc(db, "messages", docSnap.id);
        await updateDoc(docRef, { read: true });
    });
}

export { sendDirectMessage, displayChatHistory };
