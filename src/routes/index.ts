import { Router } from 'express';

import { sendEmailRouter } from './email.routes';

const routes = Router();

routes.use('/nps', sendEmailRouter);

export { routes };
