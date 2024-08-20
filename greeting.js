/* GREETING*/

window.onload = function() {
    // Exibe a janela modal
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Define a saudação com base na hora do dia
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById('greeting').textContent = greeting;

    // Exibe o modal
    modal.style.display = "block";

    // Fecha o modal quando o usuário clicar no "x"
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Fecha o modal se o usuário clicar fora do conteúdo da modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};