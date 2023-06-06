let inq_name = document.getElementById('name');
let contacts = document.getElementById('contacts');
let title = document.getElementById('inq_title');
let context = document.getElementById('inq_context');

function goMail(){
    if(inq_name.value==''){ alert('이름을 입력해주세요.'); }
    else if(title.value==''){ alert('제목을 입력해주세요.') }
    else if(context.value==''){ alert('문의 내용을 입력해주세요.') }
    else{ parent.location = 'mailto:moodi@gmail.com?Subject='+title.value+'&body='+context.value+'%0D%0A%0D%0A문의자 성명: '+inq_name.value+'%0D%0A문의자 연락처: '+contacts.value; }
    
}