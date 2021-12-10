import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// create app object via express
const app = express();

// apply middleware to app

// json() 함수는 POST나 PUT으로 요청했을때 헤더의 content-type이 json 일때
// (보통 javascript를 이용한 AJAX통신을 사용했을 때, axios 등 등)
// body 부분을 파싱해서 req.body로 접근 할 수 있게끔 해준다.
app.use(bodyParser.json({limit: '30mb', extended: true}));

// 위의 json() 함수와 동일하지만 content-type이 url형식으로 요청이 왔을때
// (html form tag를 이용해서 POST나 PUT으로 요청했을때 url형식으로 보내진다)
// body 부분을 파싱해서 req.body로 접근 가능하게 해준다.
// reference: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// mongoDB connection url
const CONNECTION_URL = process.env.CONNECTION_URL;

// process.env.PORT will be automatically generated by Heroku when deploying this application on Heroku
const PORT = process.env.PORT || 4000;

// connect with mongoDB and make application to listen specific port
mongoose.connect(CONNECTION_URL)
	.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`)))
	.catch((error) => console.log(error.message));
