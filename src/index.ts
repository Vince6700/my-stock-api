import dotenv from 'dotenv';
dotenv.config();
import express, {Application, Request, Response, NextFunction} from 'express';
import connect from './config/connect';
import bodyParser from "body-parser";
import cors from 'cors';
const port = Number(process.env.PORT || 4000);
import apiRouter from "./routers/api";

const logRequest = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    next();
}

const app: Application = express();
const allowedOrigins = process.env.ALLOWED_ORIGINS;

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logRequest);

app.get( "/", (req, res) => {
    res.send( "Hello From Express With TypeScript" );
});

app.use("/api",apiRouter);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

const db = process.env.DB_HOST || '';
connect({db});
