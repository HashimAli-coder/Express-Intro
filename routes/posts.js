import express from 'express';
import path from 'path';
const router = express.Router();
import {getPosts , getPost , createPost , updatePost , deletePost} from '../controllers/postController.js'



 
//all
router.get('/' , getPosts);
//single
router.get('/:id' , getPost);

//newpost
router.post('/' , createPost);

//updatepost
router.put('/:id' , updatePost);

//deletepost
router.delete('/:id' , deletePost);


export default router;




// app.use(express.static(path.join(__dirname , 'public')));

// app.get('/' , (req , res) =>{
// res.sendFile(path.join(__dirname , 'public', 'index.html' ));
// });

// app.get('/about' , (req , res) =>{
//     res.sendFile(path.join(__dirname , 'public', 'about.html' ));
//     });