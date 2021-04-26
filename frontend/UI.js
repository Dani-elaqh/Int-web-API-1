import MusicService from './services/MusicService';
const musicService = new MusicService();
import { formtat } from 'timeago.js';
//class para interactuar con el navegador, instantiating 
class UI {

async renderMusic(){
//consulting the data
    const music = await musicService.getMusic();
    const musicCardContainer =  document.getElementById('music-cards');
    musicCardContainer.innerHTML= '';
    musi.forEach(music => {
        document.createElement('div');
        DataView.className = '';
        DataView.innerHTML = `
        <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${music.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${music.artist}</h4>
                    <p class="card-text">${music.album}</p>
                    <a href="#" class="btn btn-danger delete" _id="${music._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
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
}

clearMusicForm(){
    document.getElementById('music-form').reset();
}

renderMessage(){


}

deleteMusic(){

}
}

export default UI;