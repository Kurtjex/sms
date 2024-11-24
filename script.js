const form = document.getElementById('sms-form');
const sendBtn = document.getElementById('send-btn');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  sendSMS(number, message);
});

async function sendSMS(number, message) {
  const url = `(link unavailable){encodeURIComponent(message)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    statusDiv.innerHTML = 'SMS sent successfully!';
  } catch (error) {
    statusDiv.innerHTML = 'Failed to send SMS';
    console.error(error);
  }
  
