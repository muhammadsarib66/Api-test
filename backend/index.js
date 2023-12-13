const express = require('express');
const mongoose = require('mongoose');
// server initialization
const app = express();

const DB = 'mongodb+srv://muhammadsarib49:sarib12@cluster0.6qtmreu.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
// const DB = 'mongodb://localhost:27017/TestData';

// import routes and controllers 
const { CreateHeroInfo ,getHeroInfo } = require('./controllers/HeroInfoController')
const {CreateBlog , getBlogInfo ,getSingleBlogInfo,getBlogbyCat,DeleteSingleBlog ,DeletecatBlog }   = require('./controllers/blogController')

app.post('/api/v1/createheroinfo',CreateHeroInfo)
app.get('/api/v1/getheroinfo',getHeroInfo)


// blog ////  
app.get('/',  (req, res) => {
     res.json('hello world');
});

app.post('/api/v1/createblog',CreateBlog);
app.get('/api/v1/getallblog',getBlogInfo);
app.get('/api/v1/getsingleblog/:id',getSingleBlogInfo);
app.get('/api/v1/getblogbycat/:cat',getBlogbyCat);
app.delete('/api/v1/deletesingleblog/:id',DeleteSingleBlog)
app.delete('/api/v1/deletecatblog/:cat',DeletecatBlog)


// mongoose connection
mongoose.connect(DB).then(() => console.log('connected')).catch(() => console.log("error arha"))

// server start 
app.listen(5000, () => {
    console.log('server is running on port 5000')
})
