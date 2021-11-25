import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
	console.log('opa');
	return res.json({
		message: 'Hello World 😜',
	});
});

export default routes;
