import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import '@shared/container';
import { routes } from 'routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

export { app };
