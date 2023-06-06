let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');

const input_id = document.getElementById("id");
const input_pw = document.getElementById("pw");

input_id.addEventListener("keydown", function(event) {
    if($(id).val() != "") {
        $(id).next('label').removeClass('warning');
        $(id).next('label').addClass('in');
    }});

input_pw.addEventListener("keydown", function(event) {
    if($(pw).val() != "") {
        $(pw).next('label').removeClass('warning');
        $(pw).next('label').addClass('in');
    }})


$(btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').removeClass('in');
        $(id).next('label').addClass('warning');
    }
    else if($(pw).val() == ""){
        $(pw).next('label').removeClass('in');
        $(pw).next('label').addClass('warning');
    }
    else {
        location.href = "../main/index.html";
    }
});