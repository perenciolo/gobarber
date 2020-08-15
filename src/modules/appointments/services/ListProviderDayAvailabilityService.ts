import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate, getHours, isAfter } from 'date-fns';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  day: number;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  year: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    day,
    year,
    month,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        provider_id,
        day,
        year,
        month,
      },
    );
    const hourStart = 8;
    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart,
    );
    const availability = eachHourArray.map(hour => {
      const hasAppointMentInHour = appointments.find(
        (appointment: Appointment) => getHours(appointment.date) === hour,
      );
      const today = new Date(Date.now());
      const appointmenDate = new Date(year, month - 1, day, hour);
      return {
        hour,
        available: !hasAppointMentInHour && isAfter(appointmenDate, today),
      };
    });

    return availability;
  }
}

export default ListProviderMonthAvailabilityService;
