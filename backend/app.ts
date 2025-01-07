import express from 'express';
import countryRoutes from './src/routes/routes';

const app = express();

app.use(express.json());
app.use('/api', countryRoutes);

export default app;
