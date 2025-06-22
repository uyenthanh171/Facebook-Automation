
//Firstname
export const validFirstName = 'Thanh';
export const invalidFirstName = '123@';
export const shortFirstName = 'A';

//Surname
export const validSurName = 'Nguyen';
export const invalidSurName = '345*&'
export const shortSurName = 'B';

//Date of birth
export const validDOB = { day: '17', month: '1', year: '2001' };
export const invalidDOB1 = { day: '30', month: '2', year: '2005' };
export const invalidDOB2 = { day: '31', month: '2', year: '2009' };
export const invalidLeapYear = { day: '29', month: '2', year: '2005' };
export const validLeapYear = { day: '29', month: '2', year: '2004' };

//LastDayofMonth
export const LastDayofMonthMap: Record<number, number> = {
1: 31,
2: 28 | 29,
3: 31,
4: 30,
5: 31,
6: 30,
7: 31,
8: 31,
9: 30,
10: 31,
11: 30,
12: 31
}

//Gender
export const femaleOption = 'Female';
export const maleOption = 'Male';
export const customOption = 'Custom';

//Email
export const validEmail = 'thanhnguyen@gmail.com';
export const invalidEmail = 'abc@';
export const existingEmail = 'uyenthanh.nguenvu@gmail.com'

//Phone
export const validPhone = '0905123456';
export const invalidPhone = '^s^&^78787';
export const existingPhone = '0961544406'

//Prounce
export type PronounValue = '1' | '2' | '6';

export const PronounMap: Record<PronounValue, {
    key: '1' | '2' | '6';
    label: string;
}> = {
    '1': { key: '1', label: 'She: "Wish her a happy birthday!"' },
    '2': { key: '2', label: 'He: "Wish him a happy birthday!"' },
    '6': { key: '6', label: 'They: "Wish them a happy birthday!"' },
};

//Gender Optional
export const validGenderOptional = 'lessbian';

//Password
export const validPassword = 'Thanhnguyen171.,';
export const weakPassword = 'abc123';
