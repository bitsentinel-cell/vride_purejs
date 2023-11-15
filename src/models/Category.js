'use strict'

import mongoose, {model} from "mongoose";


const genresSchema = new mongoose.Schema({
    name: String,

})

const categorySchema = new mongoose.Schema({
    title: { type: String, unique: true },

    genres: [genresSchema],

    author:{
        type: String
    },

});

const Category = mongoose.model('Category', categorySchema)

export default Category