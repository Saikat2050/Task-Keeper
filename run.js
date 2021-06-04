const express = require('express');
const mongoose = require('mongoose');
const alert = require('alert');
const Todo = require('./module/schema');
const Data = require('./module/emailschema');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
const dbUri = 'mongodb+srv://santra2050:Abcd1234@cluster0.4yhpu.mongodb.net/Node-data?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
console.log('connected to db');
})
.catch((err)=>{
console.log(err);
})
app.set('view engine', 'ejs');


let usename;
app.get('/',(req,res)=>{
    res.render('home',{title: 'Home'})
});
app.post('/',async (req,res)=>{
const data =await new Data(req.body);
const usedemail = await Data.findOne();
if(!usedemail) {
data.save()
.then((result)=>{
res.redirect('/');
})
.catch((err)=>{
    console.log(err);
})
}
else{
    alert("Email ID is already exist");
    res.redirect('/');
}
});
var aa=true;
app.post('/sktn97rfg',(req,res)=>{
    Data.find()
    .then((result)=>{
    result.forEach((value)=>{
    if(value.email===req.body.email && value.password===req.body.password){
        res.redirect('/newhomefcuk554');
        aa=false;
    }
    })
    if(aa) {
    alert("Wrong Email or password");
    res.redirect('/');
    }
    })
    .catch((err)=>{
    console.log(err);
    })
    });
   
app.post('/saikkkk',(req,res)=>{
const todo = new Todo(req.body);
todo.save()
.then((result)=>{
res.redirect('/newhomefcuk554');
})
.catch((err)=>{
console.log(err);
})
});
app.get('/add',(req,res)=>{
    res.render('add',{title: 'Add', usename});
});
app.get('/show',(req,res)=>{
    Todo.find().sort({ createdAt: -1})
    .then((result)=>{
        res.render('show',{title: 'Show', todos: result, usename});
    })
    .catch((err)=>{
        console.log(err);
    })
});
app.get('/show/:id', (req,res)=>{
const id = req.params.id;
Todo.findByIdAndDelete(id)
.then((result)=>{
res.redirect('/show');
})
.catch((err)=>{
console.log(err);
})
});

app.get('/newhomefcuk554',(req,res)=>{
res.render('newhome', {title: 'Home', usename});
});
app.get('/login',(req,res)=>{
    res.render('log_in', {title: 'Log in'});
    });
app.get('/signup',(req,res)=>{
    res.render('signup', {title: 'Sign up'});
    });
app.use((req,res)=>{
    res.render('404', res.statusCode=404,{title: '404 Error'});
});
app.listen(3000);
