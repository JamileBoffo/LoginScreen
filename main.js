

function logar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if (!validEmail(email)) {
        alert('Email inválido');
        return;
    }

    if (!validSenha(senha)) {
        alert("Senha deve conter no minimo 6 caracteres");
        return;
    }
    location.href = "loading.html"
}

function validEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validSenha(senha) {
    return senha.length >= 6;
}