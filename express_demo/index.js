const express = require('express');
const app = express();
app.use(express.json());

const courses=[{id:1,name:'course1'},{id:2,name:'course1'},{id:3,name:'course1'}]
app.get('/',(req,res)=>{
    res.send('Hello Lominat');
})
app.get('/api/courses', (req,res)=>{
    res.send(courses);
})
app.post('/api/courses', (req,res)=>{
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send('name is required and should be minimum3 character!')
        return;
    }
    const course= {
        id:courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})
app.get('/api/courses/:id', (req,res)=>{
    //res.send(req.param.id);
    const course = courses.find(c=>c.id===parseInt(req.param.id));
    if(!course){
        res.status(404).send('The course with the given id was not found.')
        res.send(course);
    }
})
app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.query);
})
const port= process.env.PORT || 3000;
app.listen(port,()=>console.log('Listening on port 3000...'))