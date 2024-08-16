let pendingOperation = '';
clearDisplay();

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function authenticate(operation) {
    pendingOperation = operation;
    showModal();
}

function showModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

function checkEnter(event) {
    if (event.key === "Enter") {
        document.getElementById('message').textContent = `What are you hitting enter for?? Don't you have a mouse??`;
    }
}

function submitAuthentication() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        appendValue(pendingOperation);
        closeModal();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('message').textContent = '';
    } else {
        alert('Please enter both username and password.');
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}