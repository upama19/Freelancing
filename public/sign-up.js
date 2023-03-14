$('#employer-btn').on('click', function (e) {
    $('#employer-div').removeClass('d-none');
    $('#talent-div').addClass('d-none');

    $('#talent-btn').removeClass('active');
    $('#employer-btn').addClass('active');
});

$('#talent-btn').on('click', function (e) {
    $('#employer-div').addClass('d-none');
    $('#talent-div').removeClass('d-none');

    $('#talent-btn').addClass('active');
    $('#employer-btn').removeClass('active');
});
document.getElementById("sign-up-btn").onclick = function () {
    location.href = "registration.html";
};