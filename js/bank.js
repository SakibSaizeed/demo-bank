document.getElementById('login').addEventListener('click', function() {
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
    //password value

    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;
    if (userEmail == 'sakib@gmail.com' && userPass == 'aiub') {
        window.location.href = 'banking.html';

    }
});