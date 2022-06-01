require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const { checkSession } = require('./middleWares/middleWare');

hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

const app = express();
const PORT = process.env.PORT ?? 3000;
const mainPage = require('./routers/mainPage');
const signUpRouter = require('./routers/signUpRouter.js');
const signInRouter = require('./routers/signInRouter.js');
const logOutRouter = require('./routers/logOutRouter.js');
const createPost = require('./routers/createPostRouter.js');
const editRouter = require('./routers/editRouter.js');



app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(morgan('dev'));

app.use(session({
  name: 'sID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
}));

app.use(checkSession);



app.use('/', mainPage);
app.use('/signUp', signUpRouter);
app.use('/signIn', signInRouter);
app.use('/logOut', logOutRouter);
app.use('/newPost', createPost);
app.use('/edit', editRouter);




app.listen(PORT, () => {
  console.log('server start on port ', PORT)
})
