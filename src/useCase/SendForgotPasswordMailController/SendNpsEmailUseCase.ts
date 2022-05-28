import { resolve } from 'path';
import { inject, injectable } from 'tsyringe';

import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';

import { IRequest } from './interface';

@injectable()
class SendNpsEmailUseCase {
  constructor(
    @inject('EtherealMailProvider') private iMailProvider: IMailProvider,
  ) { }
  async execute({
    name, email, code, subject,
  }: IRequest): Promise<void> {
    const variables = {
      name,
      link: process.env.REDIRECT_EMAIL_NPS,
      code,
    };

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'npsMail.hbs',
    );

    const reuslt = await this.iMailProvider.sendMail(
      {
        to: email,
        path: templatePath,
        subject,
        variables,
      },
    );
    return reuslt;
  }
}
export {
  SendNpsEmailUseCase,
};
