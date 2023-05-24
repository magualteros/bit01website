const $search = document.getElementById('search');
const $btnSearch = document.getElementById('btnsearch');

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
let search=null;
$search.addEventListener('change', (e) => {
    search = e.target.value;
    console.log(search);
});

$btnSearch.addEventListener('click',searchCourse);

function searchCourse(search) {
    
}