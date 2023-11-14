import Category from '../models/Category.js';


const createBook = async (req, res) => {
   const book  = req.body;
    try {
        const category = new Category(book);
        const savedCategories = await category.save();
        res.status(201).json(savedCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Category.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export {
    createBook,
    getAllBooks,

}
