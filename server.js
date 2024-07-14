import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.port || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);

//static
app.use(express.static(path.join(__dirname , 'public')));

//routes
app.use('/api/posts' , posts);

app.use(notFound);

//errorhandle
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server is running on ${port}`);
});