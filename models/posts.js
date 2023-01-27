const mongoose = require('mongoose') //require database modeles through mongoose

//create posts models(posts table properties/columns) using mongoose schema
const postSchema = new mongoose.Schema({

    topic:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    postCategory:{
        type: String,
        required: true
    }
});

//export created models to use in routes
module.exports = mongoose.model('Posts_tbl',postSchema); //('posts',postSchema), pass postSchema into Posts_tbl variable(Post_tbl table)