import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import todoRoutes from './routes/todo.routes';


const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes

app.use(todoRoutes);

app.listen(3001);
console.log('Server on port', 3001);