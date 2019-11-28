
function authenticate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == 'master_admin' && password == 'master'){
        window.location.href="dashboard.html?type=Administrator";
    }else if(username == 'user' && password == 'user'){
        window.location.href="dashboard.html?type=Individual";
    }else{
        window.location.href="login.html?error=Invalid Username and Password."
    }
}
