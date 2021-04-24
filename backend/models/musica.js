const {Schema, model} = require('mongoose');

const MusicSchema = new Schema({
    artist:  { type: String, required: true},
    album: { type: String, required: true},
    imagePath: {type: String, required:true},
    created: { type: Date, default: Date.now}
})

module.exports = model('Music', MusicSchema);