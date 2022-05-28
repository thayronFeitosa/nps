import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { statusCode } from '@shared/statusCode/statusCode';

import { SendNpsEmailUseCase } from './SendNpsEmailUseCase';

class SendNpsEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sendNpsEmailUseCase = container.resolve(SendNpsEmailUseCase);
    const {
      email, code, name, subject,
    } = request.body;

    if (!email || !code || !name || !subject) {
      response.status(statusCode.HTTP_BAD_REQUEST).json({ error: 'Was not informed required parameters' });
    }
    const result = await sendNpsEmailUseCase.execute({
      email,
      code,
      name,
      subject,
    });
    return response.status(statusCode.HTTP_OK).json({ result });
  }
}

export {
  SendNpsEmailController,
};
