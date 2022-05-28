import 'process';

import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';
import { injectable } from 'tsyringe';

import { IMailProvider, ISendEmailDTO } from '../IMailProvider';

@injectable()
class EtherealMailProvider implements IMailProvider {
  private client: Transporter;
  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: process.env.EMAIL_SECURE,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        this.client = transporter;
      })
      .catch((err) => console.error(err));
  }
  async sendMail({
    path, subject, to, variables,
  }:ISendEmailDTO): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');

    const templateParse = handlebars.compile(templateFileContent);

    const templateHTML = templateParse(variables);

    const message = await this.client.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text: templateHTML,
      html: templateHTML,
    });

    return message;
  }
}

export { EtherealMailProvider };
