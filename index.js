function login(){
    let user = document.getElementById("user").value.trim();
    let password = document.getElementById("password").value.trim();
    
    if(user == "" || password == ""){
        alert("Usuário ou senha inválido!");
    } else {
        alert("Logado!");
    }
}

document.getElementById("login").addEventListener("click", event => {
    event.preventDefault()
    login();
});

document.getElementById("resetPassword").addEventListener("click", () => {
    alert("Senha alterada!");
});

document.getElementById("register").addEventListener("click", () => {
    alert("Conta criada!");
});