const $formulario = document.getElementById('formulario');
const $name = document.getElementById('name');
const $email = document.getElementById('email');
const $tel = document.getElementById('tel');
const $btnsend = document.getElementById('btnsend');
const $confirmar = document.getElementById('confirmar');

let user = {
    nameUser : null,
    email : null,
    tel :  null
}
$name.addEventListener('change', (e) => {
    user.nameUser = e.target.value;
    console.log(user.nameUser);
});

$email.addEventListener('change', (e) => {
    user.email = e.target.value;
    console.log(user.email);
});

$tel.addEventListener('change', (e) => {
    user.tel = e.target.value;
    console.log(user.tel);
});

$btnsend.addEventListener('click', (e) => {
    if (user.nameUser,user.email,user.tel) {
        $confirmar.innerText = '✅ Resgistro exitoso en breve nos comunicaremos con tigo';
        console.log(user);

        $formulario.reset();
    } else {
        $confirmar.innerText = '❌ Complete todos los campos';
    }
    e.preventDefault();
});