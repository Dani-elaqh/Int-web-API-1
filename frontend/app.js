import './styles/app.css';

import MusicService from './services/MusicService';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderMusic();
});

document.getElementById('music-form')
.addEventListener('submit', function(e) {
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('artist', artist);
    formData.append('album', album);

    const ui = new UI();
    ui.addNewMusic(formData);
    ui.renderMessage('New Music added', 'success', 8000);
    
    e.preventDefault();
});

document.getElementById('music-cards')
    .addEventListener('click', e =>{
        if(e.target.classList.contains('delete')){
        const ui = new UI()
        ui.deleteMusic(e.target.getAttribute('_id'));
        }
        e.preventDefault();
    });