// Regex patterns
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const phoneRegex = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;

// Functions
export function isEmail(value: string): boolean {
    return emailRegex.test(value);
}

export function isPhone(value: string): boolean {
    return phoneRegex.test(value);
}
