import { auth } from "./firebase-config.js";

// User Signup
async function registerUser(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User registered successfully!");
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

// User Login
async function loginUser(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

export { registerUser, loginUser };
