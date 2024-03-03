const mongoose = require('mongoose');
require('dotenv').config();

// 데이터베이스에 접속하는 함수 만들기
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log('DB 접속중');
    } catch(err) {
        console.log(err);
    }
};

module.exports = dbConnect;