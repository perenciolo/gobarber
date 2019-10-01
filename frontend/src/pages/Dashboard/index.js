import React, { useMemo, useState, useEffect } from 'react';
import {
  addDays,
  format,
  isBefore,
  isEqual,
  subDays,
  parseISO,
  setHours,
  setMinutes,
  setSeconds,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const setOclock = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(setOclock, timezone);

        return {
          time: `${hour}h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(sch =>
            isEqual(parseISO(sch.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }
    loadSchedule();
  }, [date]);

  function handleDay(next) {
    if (next) {
      setDate(addDays(date, 1));
      return;
    }
    setDate(subDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={() => handleDay(false)}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={() => handleDay(true)}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
