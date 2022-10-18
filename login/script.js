var senha = document.querySelector('.senha');
var nick = document.querySelector('.login');


const validateInput = ({ target }) => {
    if (target.value.length > 6) {
        document.querySelector('.btn').style.opacity = 1;
        document.querySelector('.btn').style.cursor = "pointer";
        return;
    }
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.btn').style.cursor = "default";
}

senha.addEventListener('input', validateInput);
