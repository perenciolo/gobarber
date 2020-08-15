import 'reflect-metadata';

import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';

let listProvidersMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProvidersMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const fakesPromise = new Array(10).fill(undefined).map((_, index) =>
      fakeAppointmentsRepository.create({
        provider_id: 'user_id',
        date: new Date(2020, 4, 19, 8 + index, 0, 0),
      }),
    );
    fakesPromise.push(
      fakeAppointmentsRepository.create({
        provider_id: 'user_id',
        date: new Date(2020, 4, 31, 10, 0, 0),
      }),
    );
    await Promise.all(fakesPromise);
    const availability = await listProvidersMonthAvailability.execute({
      provider_id: 'user_id',
      year: 2020,
      month: 5,
    });
    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: false },
        { day: 31, available: true },
        { day: 12, available: true },
        { day: 29, available: true },
        { day: 1, available: true },
      ]),
    );
  });
});
