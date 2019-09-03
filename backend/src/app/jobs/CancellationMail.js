import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancellationMail {
  /**
   * Unique key for job.
   */
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    try {
      await Mail.sendMail({
        to: `${appointment.provider.name} <${appointment.provider.email}>`,
        subject: 'Agendamento cancelado',
        template: 'cancellation',
        context: {
          provider: appointment.provider.name,
          user: appointment.user.name,
          date: format(
            parseISO(appointment.date),
            "'dia' dd 'de' MMMM', às' H'h'mm",
            {
              locale: pt,
            }
          ),
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CancellationMail();
