
let posts = [
    {id:1 , title:'post1'},
    {id:2 , title:'post2'},
    {id:3 , title:'post3'},

];

//get posts
export const getPosts = (req , res , next) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
    return res.status(200).json(posts.slice(0,limit));
    }
    res.status(200).json(posts);
    
};

//get post
export const getPost = (req , res , next) => {
    const id = parseInt(req.params.id);
   // res.status(200).json(posts.filter((post) => post.id === id));
   const post = posts.find((post) => post.id === id);
   if(!post){
    const error = new Error('Page Not Found');
    error.status = 404; 
    return next(error);
   }
   res.status(200).json(post);
};

//create post
export const createPost =  (req , res , next) => {
    const newpost = {
        id: posts.length + 1,
        title: req.body.title,
    }
    if(!newpost.title){
        const error = new Error('Please include title');
    error.status = 400; 
    return next(error);
    }
    posts.push(newpost);
    res.status(201).json(posts);
};

//update post
export const updatePost = (req ,res , next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

if(!post){
    const error = new Error('No post found');
    error.status = 404; 
    return next(error);
}
post.title = req.body.title;
res.status(200).json(posts);

};

//delete post
export const deletePost = (req ,res , next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

if(!post){
    const error = new Error('No post found');
    error.status = 404; 
    return next(error);
}
posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);


};