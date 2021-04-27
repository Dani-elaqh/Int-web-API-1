import './styles/app.css';

import MusicService from './services/MusicService';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderMusic();
});

document.getElementById('music-form')
.addEventListener('submit', e =>{
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('artist', artist);
    formData.append('album', album);

    const musicService = new MusicService()
    musicService.postMusic(formData)

    const ui = new UI();
    ui.addNewMusic(formData);

    
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