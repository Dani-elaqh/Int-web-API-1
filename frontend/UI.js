import MusicService from './services/MusicService';

const musicService = new MusicService();

import { format } from 'timeago.js';

//class para interactuar con el navegador, instantiating 
class UI {

async renderMusic(){
//consulting the data
    const music = await musicService.getMusic();
    const musicCardContainer =  document.getElementById('music-cards');
    musicCardContainer.innerHTML= '';
    music.forEach((music) => {
        const div = document.createElement('div');
        div.className = '';
        div.innerHTML = `
        <div class="card m-2">
            <div class="row" >
                <div class="col-md-4">
                    <img src="https://8000-moccasin-alligator-l76m3m98.ws-eu04.gitpod.io/${music.imagePath}" alt="" class="img-fluid"/>
                </div>
                <div class="col-md-8">
                    <div class="card-block px-2>
                        <h4 class="card-title">${music.artist}</h4>
                        <p class="card-text">${music.album}</p>
                        <a href="#" class="btn btn-danger delete" _id="${music._id}">X</a>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                ${format(music.created_at)}
            </div>
      </div>
      `;
      musicCardContainer.appendChild(div);
    });
}

async addNewMusic(music){
   await musicService.postMusic(music);
   this.clearMusicForm();
   this.renderMusic();
}

clearMusicForm(){
    document.getElementById('music-form').reset();
}
//creating Div, then telling where to put the message and finally removing it
renderMessage(message, colorMessage, secondsToRemove){
    const div = document.createElement('div');
    div.className = `alert alert-${colorMessage} message`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.col-md-4');
    const musicForm = document.querySelector('#music-form');

    container.insertBefore(div, musicForm);
    setTimeout(() => {
        document.querySelector('.message').remove();
    }, secondsToRemove);


}

async deleteMusic(musicId){
    await musicService.deleteMusic(musicId);
    this.renderMusic();

}
}

export default UI;