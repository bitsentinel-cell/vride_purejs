'use strict'

import express from 'express';
import {createBook, getAllBooks} from '../controllers/CategoryController.js'
const router  = express.Router();

router.post('/create_book' , createBook);
router.get('/get_books' , getAllBooks);




export default router;