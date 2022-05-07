import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';

const app = express();
app.use(cors());

app.use(express.json());

export { app };
