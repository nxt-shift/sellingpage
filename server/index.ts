import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Shift server running' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
