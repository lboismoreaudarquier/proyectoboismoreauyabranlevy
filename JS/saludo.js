document.addEventListener("DOMContentLoaded", function () {
    let email = localStorage.getItem("userEmail");
    let usuarioCont = document.querySelector(".usuario");

    if (!usuarioCont) return;

    if (!email) {
        usuarioCont.innerHTML = '<a href="./login.html" class="usuariolog">Login</a>' +
                                '<a href="./register.html" class="userlog">Registro</a>';
    } else {
        usuarioCont.innerHTML = '<span class="saludoHeader">Hola, ' + email + '</span> ' +
                                '<a href="#" class="logOutLink">Cerrar sesión</a>';

        let logoutEl = document.querySelector(".logOutLink");
        if (logoutEl) {
            logoutEl.addEventListener("click", function (e) {
                e.preventDefault();
                localStorage.removeItem("userEmail");
                location.reload();
            });
        }
    }
});
