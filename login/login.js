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
        alert('로그인 기능은 현재 ID, 비밀번호 입력 및 메인 화면으로 이동 기능만 작동합니다.');
        location.href = "../main/index.html";
    }
});
