interface ISendEmailDTO {
  to: string,
  subject: string,
  variables: any,
  path: string
}
interface IMailProvider {
  sendMail({
    to, path, subject,
    variables,
  }:ISendEmailDTO

  ): Promise<void>;
}

export { IMailProvider, ISendEmailDTO };
