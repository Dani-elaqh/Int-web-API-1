//this file is the one that retrieves the information getting elements from the index.html file. 
//this code is from the Tutorail JavaScript Full Stack https://www.youtube.com/watch?v=hO9993I520E&t=258s
import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderMusic();
});

document.getElementById('music-form')
.addEventListener('submit', (e) => {
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('artist', artist);
    formData.append('album', album);

    const ui = new UI();
    ui.addNewMusic(formData);
    ui.renderMessage('New Music added', 'success', 3000);
    
    e.preventDefault();
});

document.getElementById('music-cards')
    .addEventListener('click', e =>{
        if(e.target.classList.contains('delete')){
        const ui = new UI();
        const id = e.target.getAttribute('_id');
        ui.deleteMusic(id);
        ui.renderMessage('Music removed', 'success', 3000)
        }
        e.preventDefault();
    });