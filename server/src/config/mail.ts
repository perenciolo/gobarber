export enum MailDriver {
  ETHEREAL = 'ethereal',
  SES = 'ses',
}

interface IMailConfig {
  driver: MailDriver;
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || MailDriver.ETHEREAL,
  defaults: {
    from: {
      email: process.env.AWS_DEFAULT_MAIL_FROM,
      name: process.env.AWS_DEFAULT_MAIL_NAME,
    },
  },
} as IMailConfig;
