/* Receive an error message when the `form` is submitted if:
    The `input` field is empty
    The email address is not formatted correctly
*/

let submit = document.getElementById('submit');
let email = document.getElementById('eMail');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener('click', function(){
    //alert('a');    /*Test button on click to ensure stacking order is correct*/
    if(!!regex.test(email.value)) {
        alert('y');
        document.getElementById('hiddenEx').style.visibility = 'hidden';
        document.getElementById('hiddenPls').style.visibility = 'hidden';
        document.getElementById('submit').style.borderColor = ' black';
        document.getElementById('email').style.borderColor = ' black';
    } else {
        document.getElementById('hiddenEx').style.visibility = 'visible';
        document.getElementById('hiddenPls').style.visibility = 'visible';
        document.getElementById('submit').style.borderColor = ' red';
        document.getElementById('email').style.borderColor = ' red';
    }
       
});

//Self :
/*
Read regex test
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


---Hidden / Visible Content Color ---
document.getElementById('hiddenEx').style.visibility = '';
document.getElementById('hiddenPls').style.visibility = '';
document.getElementById('submit').style.borderColor = '';
document.getElementById('email').style.borderColor = '';
    




*/