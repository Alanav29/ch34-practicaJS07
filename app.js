function getWelcomeMsgRef() {
	return document.getElementById("welcome-message");
}

function changeWelcomeMsg() {
	const welcomeMsg = getWelcomeMsgRef();
	const name = prompt("Ingresa tu nombre");
	welcomeMsg.innerHTML = `Hola ${name}!`;
}
