// get DOM element
let nameInput = document.getElementById("contactName");
let phoneNumberInput = document.getElementById("contactNumber");
let emailInput = document.getElementById("contactEmail");
let contactMethodInput = document.getElementById("contactMethod");
let messageInput = document.getElementById("contactMessage");
const sendButton = document.getElementById("sendButton");
const output = document.getElementById("output");

// display message sent
const displayMessage = (contactName, contactNumber, contactEmail, contactMethod, contactMessage, output) => {
    output.innerHTML = `
    <div class="dashboard-card">
    <h2>Message Sent</h2>
    <p><strong>Name:</strong> ${contactName}</p>
    <p><strong>Phone Number:</strong> ${contactNumber}</p>
    <p><strong>Email Address:</strong> ${contactEmail}</p>
    <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
    <p><strong>Message:</strong> ${contactMessage}</p>
    </div>`;
};

// generate message sent
const generateMessage = () => {
    try {
        // retrieve inputs
        const contactName = nameInput.value;
        console.log("Name: ", contactName);
        const contactNumber = phoneNumberInput.value;
        console.log("Phone Number: ", contactNumber);
        const contactEmail = emailInput.value;
        console.log("Email: ", contactEmail);
        const contactMethod = contactMethodInput.value;
        console.log("Preferred Contact Method: ", contactMethod);
        const contactMessage = messageInput.value;
        console.log("Message: ", contactMessage);
        // display message
        displayMessage(contactName, contactNumber, contactEmail, contactMethod, contactMessage, output);
    } catch (error) {
        output.innerHTML = `
        <div class = "dashboard-card">
        h2>Error</h2>
        <ul>${error.message}</ul>
        </div>`;
        output.style.backgroundColor = "#f8d7da";
    }
};

// button click
sendButton.addEventListener("click", generateMessage);