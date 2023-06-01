'use strict';

const $btnMenu = document.getElementById('movil-menu');
const $btnClose = document.getElementById('btnClose');
const $menu = document.getElementById('menu');


$btnMenu.addEventListener('click', () => {
    console.log('abrio menu');
    $menu.classList.add('active') ;
});
$btnClose.addEventListener('click', () => {
    console.log('click en X');
    $menu.classList.remove('active');
});
//* variables del formulario de login */

const $flogin = document.getElementById('form-login');
const $logCorreo = document.getElementById('login-correo');
const $logPassword = document.getElementById('login-password');
const $see = document.getElementById('see');

//* constantes del formulario de registro */

const $fRegistro = document.getElementById('form-registro');
const $name = document.getElementById('name');
const $mail = document.getElementById('email');
const $tel = document.getElementById('tel');
const $password = document.getElementById('password');
const $confirmPass = document.getElementById('confirm-password');
const $show = document.getElementById('show');

let user = {
    userName:  null,
    userMail: null,
    userTel: null,
    userPassword: null
}
function isEmail(mail) { 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}

function isPass(password) {
    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(password);
}

let message = '';

function sendMessage(message,contenedor) {
    const $message = document.createElement('div');
    $message.innerText = ''+message;
    $message.style.color = 'darkred';
    $message.style.backgroundColor = 'gray';
    contenedor.appendChild($message);

    const timer = () => {
        let secondsTime = 3;
        const time = setInterval(() => {
            secondsTime--;
            if (secondsTime === 0) {
                $message.style.display = 'none';
                clearInterval(time);
            };
        }, 1000);
    };
    timer();
}

$name.addEventListener('change', (e) => {
    if ($name.value.length >= 3) {
        $name.style.boxShadow = '';
        user.userName = e.target.value;
    } else {
        $name.style.boxShadow = '0 1px red';
        message = 'Nombre no admitido';
        sendMessage(message,$show);
    }
 });

$mail.addEventListener('change', (e) => {
    if (isEmail($mail.value)) {
        $mail.style.boxShadow = '';
        user.userMail = e.target.value;
    } else {
        $mail.style.boxShadow = '0 1px red';
        message = 'Correo no valido';
        sendMessage(message,$show);
    }
});

$tel.addEventListener('change', (e) => {
    if ($tel.value.length >= 7) {
        $tel.style.boxShadow = '';
        user.userTel = e.target.value;
    } else {
        $tel.style.boxShadow = '0 1px red';
        message = 'El teléfono debe tener minimo 7 caracteres';
        sendMessage(message,$show);
    }
});

$password.addEventListener('change', (e) => {
    if (isPass($password.value)) {
        $password.style.boxShadow = '';
    } else {
        $password.style.boxShadow = '0 1px red';
        message = `La contraseña debe 
        contener mayúsculas, 
        minúsculas,números
        y minimo 8 caracteres`;
        sendMessage(message,$show);
    }
});
 
$confirmPass.addEventListener('change', (e) => {
    if (isPass($confirmPass.value)) {
        if ($confirmPass.value === $password.value) {
            $confirmPass.style.boxShadow = '';
            user.userPassword = e.target.value;
        } else {
            $confirmPass.style.boxShadow = '0 1px red';
            message = 'Las contraseñas no coinciden';
        sendMessage(message,$show);
        }
    } else {
        $confirmPass.style.boxShadow = '0 1px red';
        message = `La contraseña debe 
        contener mayúsculas, 
        minúsculas,números
        y minimo 8 caracteres`;
        sendMessage(message,$show);
    }
 });

$fRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!user.userName || !user.userMail || !user.userTel || !user.userPassword) {
        message = 'Complete todos los campos';
        sendMessage(message,$show);
    } else {
        const $modal = document.getElementById('modal');
        $modal.classList.add('active');
        $modal.style.backgroundColor = 'gray';
        const $close = document.createElement('button');
        $close.innerText = 'X';
        $close.classList.add('btnClose');
        $close.addEventListener('click', () => {
            console.log('click cerrar');
            $modal.style.display = 'none';
        });
        $modal.innerText = `Bienvenido a esta gran familia, ${user.userName}, nos contactaremos contigo para hacer seguimiento mediante el correo ${user.userMail} o al teléfono ${user.userTel} `;
        $modal.appendChild($close);
        window.location.replace('http://127.0.0.1:5500/bit01website/cursos.html');
    }
});



const log = {
    logEmail: null,
    logPass: null
}

$logCorreo.addEventListener('change', (e) => {
    if (isEmail($logCorreo.value)) {
        $logCorreo.style.boxShadow = '';
        log.logEmail = e.target.value;
    } else {
        $logCorreo.style.boxShadow = '0 1px red';
        message = 'Correo no valido';
        sendMessage(message,$see);
    }
 });

 $logPassword.addEventListener('change', (e) => {
    if (isPass($logPassword.value)) {
        $logPassword.style.boxShadow = '';
        log.logPass = e.target.value;
    } else {
        $logPassword.style.boxShadow = '0 1px red';
        message = `La contraseña debe 
        contener mayúsculas, 
        minúsculas,números
        y minimo 8 caracteres`;
        sendMessage(message,$see);
    }
});

$flogin.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!log.logEmail || !log.logPass) {
        message = 'Complete todos los campos';
        sendMessage(message,$see);
    } else {
        const $modal = document.getElementById('modal');
        $modal.classList.add('active');
        $modal.style.backgroundColor = 'gray';
        const $close = document.createElement('button');
        $close.innerText = 'X';
        $close.classList.add('btnClose');
        $close.addEventListener('click', () => {
            console.log('click cerrar');
            $modal.style.display = 'none';
        });
        $modal.innerText = `Bienvenido ${log.logEmail} `;
        $modal.appendChild($close);
        window.location.replace('http://127.0.0.1:5500/bit01website/index.html');
    }
});