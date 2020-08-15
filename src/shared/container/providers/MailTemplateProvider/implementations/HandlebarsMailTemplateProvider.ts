import fs from 'fs';
import handlebars from 'handlebars';

import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseMailTemplateDTO from '../dto/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const template = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
