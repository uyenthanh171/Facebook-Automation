import { faker } from '@faker-js/faker';

export function generateVietnamPhone(prefix: string = '09'): string {
    const rest = faker.string.numeric({ length: 8, allowLeadingZeros: true });
    return prefix + rest;
}

export const firstName = {
    "valid": () => faker.person.firstName(),
    "invalid": () => faker.string.alphanumeric({ length: 7 }),
    "specialChar": () => "!@#$%^&*()",
    "short": () => faker.string.alpha({ length: 1 })
}

export const surName = {
    "valid": () => faker.person.lastName(),
    "invalid": () => faker.string.alphanumeric({ length: 7 }),
    "specialChar": () => "!@#$%^&*()",
    "short": () => faker.string.alpha({ length: 1 })
}

export const dateOfBirth = {
    "valid": { "day": "17", "month": "1", "year": "2001" },
    "invalid": { "day": "30", "month": "2", "year": "2005" },
    "invalidLeapYear": { "day": "29", "month": "2", "year": "2005" },
    "validLeapYear": { "day": "29", "month": "2", "year": "2004" }
}

export const gender = {
    "female": "1",
    "male": "2",
    "custom": "6"
}

export const email = {
    "valid": () => faker.internet.email({ firstName: faker.person.firstName(), lastName: faker.person.lastName(), provider: 'gmail.com' }),
    "dblAtSymbol": () => faker.string.alphanumeric({ length: 10 }) + '@@' + faker.string.alpha({ length: 5 }) + '.com',
    "dotNatSymbol": () => faker.string.alphanumeric({ length: 10 }) + '.@' + faker.string.alpha({ length: 5 }) + '.com',
    "atSymbolNdot": () => faker.string.alphanumeric({ length: 10 }) + '@.' + faker.string.alpha({ length: 5 }) + '.com',
    "lackDot": () => faker.string.alphanumeric({ length: 10 }) + '@' + faker.string.alpha({ length: 5 }) + 'com',
    "lackDomain": () => faker.string.alphanumeric({ length: 10 }) + '@',
    "existing": () => "uyenthanh.nguenvu@gmail.com"
}

export const phone = {
    "valid": () => generateVietnamPhone(),
    "short": () => faker.string.numeric({ length: 5, allowLeadingZeros: true }),
    "onlyAlpha": () => faker.string.alpha({ length: 9 }),
    "existing": () => "0961544406"
}

export const pronoun = {
    1: "She: \"Wish her a happy birthday!\"",
    2: "He: \"Wish him a happy birthday!\"",
    6: "They: \"Wish them a happy birthday!\""
}

export const genderOptional = {
    "valid": () => faker.person.gender()
}

export const password = {
    "valid": () => faker.string.alphanumeric({ length: { min: 10, max: 15 }, casing: 'mixed' }) + '!@',
    "onlyAlpha": () => faker.string.alpha({ length: 12, casing: 'mixed' }),
    "onlyNumber": () => faker.string.numeric({ length: 12, allowLeadingZeros: true }),
    "alphaAndNumber": () => faker.string.alphanumeric({ length: 12 }),
    "short": () => faker.string.alphanumeric({ length: 2 })
}

