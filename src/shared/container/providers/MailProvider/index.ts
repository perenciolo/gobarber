import { container } from 'tsyringe';

import mailConfig, { MailDriver } from '@config/mail';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import EtherealMailProvider from '@shared/container/providers/MailProvider/implementations/EtherealMailProvider';
import SESMailProvider from '@shared/container/providers/MailProvider/implementations/SESMailProvider';

const providers = {
  [MailDriver.ETHEREAL]: container.resolve(EtherealMailProvider),
  [MailDriver.SES]: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
