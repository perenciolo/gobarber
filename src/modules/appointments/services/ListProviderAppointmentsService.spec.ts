import 'reflect-metadata';

import ListProviderAppointmentsService from './ListProviderAppointmentsService';
import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';

let listProviderAppointmentsService: ListProviderAppointmentsService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const fakesPromise = new Array(2).fill(undefined).map((_, index) =>
      fakeAppointmentsRepository.create({
        provider_id: 'provider',
        user_id: 'user_id',
        date: new Date(2020, 4, 19, 8 + index, 0, 0),
      }),
    );
    const appointmentsPromises = await Promise.all(fakesPromise);
    const appointments = await listProviderAppointmentsService.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 19,
    });
    expect(appointments).toMatchObject(appointmentsPromises);
  });
});
