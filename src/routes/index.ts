import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.send('HELLO World'));

export default routes;