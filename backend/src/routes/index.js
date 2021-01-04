const router = require('koa-router')({ prefix: '/api' });
const {
    Login,
    Logout,
    Register,
    GetUserInfo,
    SetUserInfo,
    GetUserImage
} = require('./user.js');
const { Upload } = require('./image.js');

const { sendMessage, getMessage, deleteMessage } = require('./message');

module.exports = router
    .post('/login', Login)
    .post('/logout', Logout)
    .post('/register', Register)
    .get('/userInfo', GetUserInfo)
    .post('/userInfo', SetUserInfo)
    .post('/upload', Upload)
    .get('/userImage', GetUserImage)
    .get('/message', getMessage)
    .post('/message', sendMessage)
    .delete('/message', deleteMessage)