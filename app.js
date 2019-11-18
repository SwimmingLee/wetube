
//const express = require('express')
//babel을 까았더니 아래와 같은 코드가 실행이 되었따. 
// ES6부턴, import를 통해서 쓸 수 예쁘게 사용할 수 있다. 
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import routes from "./routes"
import { localsMiddelWare } from "./middleware"

const app = express()

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
//app.set('views', './views');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // 보안을 위한 것이다. 
app.use(morgan("dev"));


app.use(localsMiddelWare)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

