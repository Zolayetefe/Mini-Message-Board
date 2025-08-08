const {Router} = require('express')

messageRoute= Router()
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text:'how are you',
    user:'zelalem',
    added:new Date()
  },
  {
    text: 'i am fine',
    user: 'abrham',
    added: new Date()
  }
];


messageRoute.get('/',(req,res)=>{
    res.render('index',{title: 'Mini messageboard',messages:messages})
})

messageRoute.get('/new',(req,res)=>[
   res.render('form')
])


messageRoute.post('/new',(req,res)=>{
   const user = req.body.messageUser
   const text = req.body.messageText
   messages.push({text:text,user:user,added: new Date()})
   res.redirect('/message')
})

module.exports = messageRoute