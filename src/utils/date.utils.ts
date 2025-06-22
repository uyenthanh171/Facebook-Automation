import { LastDayofMonthMap } from '../data/register.data'
export function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0 || (year % 400 == 0))
}

export function isValidDate(day: number, month: number, year: number): boolean {
    if (month < 1 || month > 12) return false;
    let maxday = LastDayofMonthMap[month];
    if (month === 2) {
        maxday = isLeapYear(year) ? 29 : 28;
    }
    return day >= 1 && day <= maxday;
}

