document.addEventListener("DOMContentLoaded", function () {
    let logoutEl = document.querySelector(".logOut");
    let logoutLink = document.querySelector(".logOutLink");

    let doLogout = function () {
        localStorage.removeItem("userEmail");
        location.reload();
    };

    if (logoutEl) {
        logoutEl.addEventListener("click", function (e) {
            e.preventDefault();
            doLogout();
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            doLogout();
        });
    }
});
