import {
    addMinutes,
    format,
  } from "date-fns";
  
  export type HoursSlot = Record<'hours', string>;
  export type ConsultationRange = Record<'hoursStart' | 'hoursEnd' | 'intervalMinutes', number>;
  export const createConsultationRange = <T extends number>(duration: T): ConsultationRange => {
    return {
      hoursStart: 9,
      hoursEnd: 18,
      intervalMinutes: duration || 60,
    };
  };
  
  export const getConsultationsRange = (duration: number): HoursSlot[] => {
    const consultation = createConsultationRange(duration);
    const hours: HoursSlot[] = [];
    let date = new Date();
    date.setHours(consultation.hoursStart, 0, 0);
    while (date.getHours() < consultation.hoursEnd) {
      hours.push({ hours: format(date, 'kk:mm') });
      date = addMinutes(date, consultation.intervalMinutes);
    }
    return hours;
  };