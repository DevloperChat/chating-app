// JavaScript Function for Sending Messages with Timestamp
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();
    const chatMessages = document.querySelector(".chat-messages");

    if (messageText) {
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");

        // Add timestamp
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        newMessage.innerHTML = `
            <p>${messageText}</p>
            <span class="timestamp">${time}</span>
        `;

        chatMessages.appendChild(newMessage);

        // Clear input and scroll to the bottom
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Avatar Upload Feature
// document.getElementById("avatarUpload").addEventListener("change", function () {
//     const file = this.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             document.querySelector(".profile-img").src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// });

// Scroll to the latest message when chat window is loaded
window.onload = () => {
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Show chat messages for a selected contact
function showChat(contactId) {
    const messageArea = document.getElementById('message-area');
    messageArea.innerHTML = `
      <div class="received-message">Hello from ${contactId}!</div>
      <div class="sent-message">Hi, nice to chat!</div>
    `;
}

// Send message on Enter key press
const messageInput = document.getElementById('message-input');
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

