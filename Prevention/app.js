import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("messageForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const messageText = document.getElementById("messageText").value;
  const deliveryOption = document.getElementById("deliveryOption").value;
  const recipientEmail = document.getElementById("recipientEmail").value;

  if (!messageText) {
    alert("Please write a message.");
    return;
  }

  if (deliveryOption === "family" && !recipientEmail) {
    alert("Please enter recipient email.");
    return;
  }

  try {
    await addDoc(collection(db, "messages"), {
      text: messageText,
      deliveryOption,
      recipientEmail: deliveryOption === "family" ? recipientEmail : "",
      status: "pending",
      timestamp: serverTimestamp()
    });
    alert("Message submitted successfully!");
    form.reset();
  } catch (err) {
    console.error("Error adding document: ", err);
    alert("Error submitting message.");
  }
});
