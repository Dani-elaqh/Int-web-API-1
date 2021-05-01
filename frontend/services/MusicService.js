//Class with methods that will be used many times to get, post and delete the data 
class MusicService{

    constructor(){
        this.URI = 'https://8000-moccasin-alligator-l76m3m98.ws-eu04.gitpod.io/api/music';
    }

    async getMusic(){
        const res = await fetch(this.URI);
        const music= await res.json();
        return music;
    }

    async postMusic(music){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: music
        });
        const data = await res.json();
        console.log(data);

    }

    async deleteMusic(musicId){
        const res = await fetch(`${this.URI}/${musicId}`, {
                headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();

        console.log(data);

    }
}

export default MusicService;