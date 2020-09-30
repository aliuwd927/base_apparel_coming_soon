/* Receive an error message when the `form` is submitted if:
    The `input` field is empty
    The email address is not formatted correctly
*/

let submit = document.getElementById('submit');
let email = document.getElementById('email');

submit.addEventListener('click', function(){
    //alert('a');    /*Test button on click to ensure stacking order is correct*/
    if(email.value.length = ' '){
        //alert('container is empty'); /* Test container field is empty */
        document.getElementById('hiddenEx').style.visibility = 'visible';
        document.getElementById('hiddenPls').style.visibility = 'visible';
        document.getElementById('submit').style.borderColor = ' red';
        document.getElementById('email').style.borderColor = ' red';
    }
})