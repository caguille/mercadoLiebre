const express= require ('express');
const app= express();
const path=require ('path');
const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.listen(5000,()=> console.log ('El servidor 5000 corre sin problema'));
