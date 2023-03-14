window.addEventListener("scroll", function () {
    const navbar = document.getElementById('navbar_top');
    const loginText = document.getElementById('login_text');

    navbar.classList.toggle('sticky', window.scrollY > 0);
    loginText?.classList.toggle('login-text-scroll', window.scrollY > 0);
});