import 'reflect-metadata';

import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';

let listProvidersDayAvailability: ListProviderDayAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProvidersDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const fakesPromise = new Array(3).fill(undefined).map((_, index) =>
      index === 0 || index === 2
        ? fakeAppointmentsRepository.create({
            provider_id: 'user_id',
            user_id: 'user_id',
            date: new Date(2020, 4, 19, 8 + index, 0, 0),
          })
        : null,
    );
    await Promise.all(fakesPromise);
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(new Date(2020, 4, 19, 11).getTime());
    const availability = await listProvidersDayAvailability.execute({
      provider_id: 'user_id',
      year: 2020,
      month: 5,
      day: 19,
    });
    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 17, available: true },
        { hour: 14, available: true },
      ]),
    );
  });
});
