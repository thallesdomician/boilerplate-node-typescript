import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('Server running! 😍'));
