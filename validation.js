var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
var regexPhone = /^(\+84\s)?[\(]?\d{3}[\)\s]?[\s\.-]\d{3}[\s\.-]\d{3}$/;
var regexUsername = /^[A-Za-z0-9_]{1,20}$/;
var regexPassword = /^([A-Za-z0-9@!#$%^&*]){6,20}$/;

function checkNull(txt) {
    if(txt.value.length == 0) 
        return true;
    else 
        return false;
}

function checkPass(txt1, txt2) {
    if(txt1.value == txt2.value) 
        return true;
    else 
        return false;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function formValidate(f) {

    if(checkNull(f.email)) {
        alert('Vui lòng nhập Email !');
        return;
    }

    if(!StringMatch(f.email, regexEmail)) {
        alert('Email sai định dạng !');
        f.email.value="";
        f.email.focus();
        return;
    }

    if(checkNull(f.phone)) {
        alert('Vui lòng nhập số điện thoại !');
        return;
    }

    if(!StringMatch(f.phone, regexPhone)) {
        alert('Số điện thoại sai định dạng !');
        f.phone.value="";
        f.phone.focus();
        return;
    }

    if(checkNull(f.username)) {
        alert('Vui lòng nhập tên đăng nhập !');
        return;
    }

    if(!StringMatch(f.username, regexUsername)) {
        alert('Tên đăng nhập sai định dạng !');
        f.username.value="";
        f.username.focus();
        return;
    }

    if(checkNull(f.password)) {
        alert('Vui lòng nhập mật khẩu !');
        return;
    }

    if(!StringMatch(f.password, regexPassword)) {
        alert('Mật khẩu sai định dạng !');
        f.password.value="";
        f.password.focus();
        return;
    }

    if(checkNull(f.cfpassword)) {
        alert('Vui lòng xác nhận mật khẩu !');
        return;
    }

    if(!checkPass(f.password, f.cfpassword)) {
        alert('Mật khẩu không giống nhau !');
        f.cfpassword.value="";
        f.cfpassword.focus();
        return;
    }

    alert('Bạn đã nhập đủ thông tin !');






}