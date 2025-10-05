import express from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users.mts';

dotenv.config();

const app = express();
const PORT: Number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});