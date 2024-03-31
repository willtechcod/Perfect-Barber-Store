import { setHours, setMinutes, format, addMinutes } from 'date-fns';

export function generateDayTimeList(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 9), 0); // set start time to 09:00
    const endTime = setMinutes(setHours(date, 18), 0); // Set end time to 18:00
    const interval = 50; // interval in minutes
    const timeList: string[] = [];

    let currentTime = startTime;

    while (currentTime <= endTime) {
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }

    return timeList;
}