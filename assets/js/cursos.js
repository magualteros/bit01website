'use strict';
const $search = document.getElementById('search');
const $btnSearch = document.getElementById('btnsearch');
const $show = document.getElementById('show');

let courses = [
    {
        titulo: 'GitHub',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/github.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Musica',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/musica.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Fotografía',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/foto.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Robótica',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/robotica.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'React',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/react.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Medicina',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/medicina.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Python',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/python.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Cocina',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/cocina.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Personal Trainer',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/trainer.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Finanzas',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/finanzas.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Lógica',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/logica.jpg',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        titulo: 'Mecánica',
        imagen: 'http://127.0.0.1:5500/bit01website/assets/images/mecanica.png',
        descripción:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    }
];
const sectionCourses = document.getElementById('cursos');
function mostrarCursos(list) {
    
    list.forEach(curso => {
        //**** Creando elementos html para seccion de cursos ****
        const $cardCourse = document.createElement('div');
        $cardCourse.classList.add('card');
        const $cardContent = document.createElement('div');
        $cardContent.classList.add('content-card');
        const $pictureCurse = document.createElement('picture');
        const $imgCourse = document.createElement('img');
        $imgCourse.setAttribute('src', curso.imagen);
        const $titleCourse = document.createElement('h2');
        $titleCourse.innerText = '' + curso.titulo;
        const $desCourse = document.createElement('p');
        $desCourse.innerText = '' + curso.descripción;

        //**** Ensamblando elementos html ****
        $pictureCurse.appendChild($imgCourse);
        $cardContent.appendChild($pictureCurse);
        $cardContent.appendChild($titleCourse);
        $cardContent.appendChild($desCourse);
        $cardCourse.appendChild($cardContent);
        sectionCourses.appendChild($cardCourse);
    });
}
mostrarCursos(courses);
let search = null;

$search.addEventListener('change', (e) => {
    search = e.target.value;
});



function searchCourse() {
    $show.innerHTML = '';
    let message = '';
    function sendMessage(message) {
        const $message = document.createElement('div');
        $message.innerText = ''+message;
        $message.style.color = 'red';
        $show.appendChild($message);
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
    if (!search) {
        message = '❌ Ingrese alguna palabra';
        sendMessage(message);
    } else {
        const result = courses.find((curso) => curso.titulo == search);
        if (!result) {
            message = 'No tenemos cursos de este tema 😕';
            sendMessage(message);
        } else {
            //const $mostrar = document.createElement('section');
        const $closeCourse = document.createElement('button');
        $closeCourse.innerText = 'X';
        $closeCourse.classList.add('btnClose');
        const $cardSearch = document.createElement('div');
        $cardSearch.classList.add('card');
        const $searchContent = document.createElement('div');
        $searchContent.classList.add('content-card');
        const $pictureSearch = document.createElement('picture');
        const $imgSearch = document.createElement('img');
        $imgSearch.setAttribute('src', result.imagen);
        const $titleSearch = document.createElement('h2');
        $titleSearch.innerText = '' + result.titulo;
        const $desSearch = document.createElement('p');
        $desSearch.innerText = '' + result.descripción;

        $closeCourse.addEventListener('click', () => {
            console.log('click cerrar');
            $cardSearch.style.display = 'none';
        });

        $pictureSearch.appendChild($imgSearch);
        $searchContent.appendChild($closeCourse);
        $searchContent.appendChild($pictureSearch);
        $searchContent.appendChild($titleSearch);
        $searchContent.appendChild($desSearch);
        $cardSearch.appendChild($searchContent);
        $show.appendChild($cardSearch);
        }
        
    }
    
}

$btnSearch.addEventListener('click',searchCourse);