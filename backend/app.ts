import express from 'express';
import countryRoutes from './src/routes/routes';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());
const apiPrefix = process.env.BACKEND_URL || '/api';
app.use(apiPrefix, countryRoutes);

export default app;
