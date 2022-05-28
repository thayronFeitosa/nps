import { Router } from 'express';

import { SendNpsEmailController } from '../useCase/SendForgotPasswordMailController/SendNpsEmailController';

const sendEmailRouter = Router();

const sendNpsEmailController = new SendNpsEmailController();

sendEmailRouter.post('/sendMail', sendNpsEmailController.handle);

export { sendEmailRouter };
