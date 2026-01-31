//NGIKUTIN MAS YAMA DI DAY 4 INI BAGIAN WELCOME SPEECH

// JavaScript to display a welcome message to the user
welcomeMessage();
// Function to display a welcome message to the user
function welcomeMessage() {
  // Prompt the user for their name
  let userResponse = prompt("Selamat datang di website saya, siapa nama anda?");
  // Handle case where user cancels or enters an empty name
  if (userResponse === null || userResponse.trim() === "") {
    userResponse = "Tamu";
  }
  // Display the welcome message
  document.getElementById("welcome-speech").innerText = `Halo, ${userResponse}! Selamat datang di website Isma Wahyudi.`;
}
// Function to handle message submission (currently empty)

// INI BUAT MESSAGE US
function submitMessage() {}

function submitMessage(event) {
  event.preventDefault();

  // NGAMBIL DATA DARI FORM
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const messageList = document.getElementById("message-list");

  // BIKIN KOTAK BARU
  const messageCard = document.createElement("div");
  messageCard.className = "border rounded-lg p-4 shadow-sm";

  // NGISI KOTAK
  messageCard.innerHTML = `
    <p class="font-bold">Name: ${name}</p>
    <p class="text-sm text-gray-600">Email: ${email}</p>
    <p class="mt-2">${message}</p>
  `;

  // DI TAMPILIN
  messageList.appendChild(messageCard);

  messageList.scrollTop = messageList.scrollHeight;
  event.target.reset();
}
