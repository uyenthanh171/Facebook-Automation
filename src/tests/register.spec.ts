import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import { Assertation } from '../helpers/index.helpers';
import { TestData } from '../data/index.data';
import { pronounHelpers } from '../helpers/pronoun.helpers';
const {
    firstName,
    surName,
    dateOfBirth,
    gender,
    genderOptional,
    email,
    phone,
    password
} = TestData.register;

test.describe('Register new account successfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC01-Input valid value in all fields', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input valid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid leap year', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.validLeapYear);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.validLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Select female for gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select female gender', async () => {
            await registerPage.clickFemale();
            await Assertation.register.expectedGender(page, gender.female);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(phone.valid);
            await Assertation.register.expectedPhone(page, phone.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Select custom gender (with she pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, gender.custom);

            const fixedValue: keyof typeof TestData.register.pronoun = '1';
            const expectedKey = TestData.register.pronoun[fixedValue].key;

            await registerPage.selectPronoun(fixedValue);
            await Assertation.register.expectedCustomGender(page, '1');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Select custom gender (with he pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with he', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, gender.custom);
            await registerPage.selectPronoun("She: \"Wish her a happy birthday!\"");
            await pronounHelpers(page, registerPage, '1');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Select custom gender (with they pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, gender.custom);
            await registerPage.selectPronoun("He: \"Wish him a happy birthday!\"");
            await pronounHelpers(page, registerPage, '2');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Select custom gender and input gender optional', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, gender.custom);
            await registerPage.selectPronoun("They: \"Wish them a happy birthday!\"");
            await pronounHelpers(page, registerPage, '6');
        });
        await test.step('Input value to gender optional field', async () => {
            await registerPage.fillGenderOptional(genderOptional.valid);
            await Assertation.register.expectedGenderOptinal(page);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC8-Input valid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid phone number', async () => {
            await registerPage.fillPhone(phone.valid);
            await Assertation.register.expectedPhone(page, phone.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
});

test.describe('Register new account unsuccessfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC01-Input short firstname', async ({ page }) => {
        await test.step('Input short firstname', async () => {
            await registerPage.fillFirstName(firstName.short);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(phone.valid);
            await Assertation.register.expectedPhone(page, phone.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input short surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input short surname', async () => {
            await registerPage.fillSurName(surName.short);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(phone.valid);
            await Assertation.register.expectedPhone(page, phone.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Input invalid firstname', async ({ page }) => {
        await test.step('Input invalid firstname', async () => {
            await registerPage.fillFirstName(firstName.invalid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Input invalid surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input invalid surname', async () => {
            await registerPage.fillSurName(surName.invalid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Leave firstname empty', async ({ page }) => {
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Leave surname empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Input invalid DOB', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid DOB', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.invalid1);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.invalid1);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC08-Input invalid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid leap year', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.invalidLeapYear);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.invalidLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC09-Leave DOB empty and click Sign Up button 1 time', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC10-Leave DOB empty and click Sign Up button 2 times', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(phone.valid);
            await Assertation.register.expectedPhone(page, phone.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton2times();
    });
    test('TC11-Select only custom gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, gender.custom);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC12-Leave gender empty', async ({ page }) => {
        await test.step('Input valid value firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid value surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC13-Leave email/phone number empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Input existing email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input existing email address', async () => {
            await registerPage.fillEmail(email.existing);
            await Assertation.register.expectedEmail(page, 'existing');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Input existing phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input existing phone number', async () => {
            await registerPage.fillPhone(phone.existing);
            await Assertation.register.expectedPhone(page, 'existing');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC16-Input invalid email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input invalid email address', async () => {
            await registerPage.fillEmail(email.invalid);
            await Assertation.register.expectedEmail(page, 'invalid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC17-Input invalid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input invalid phone number', async () => {
            await registerPage.fillPhone(phone.invalid);
            await Assertation.register.expectedPhone(page, 'invalid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC18-Leave email empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC19-Leave number phone empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input invalid password', async () => {
            await registerPage.fillNewPassword(password.valid);
            await Assertation.register.expectedNewPassword(page, password.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC20-Input invalid password', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await test.step('Input invalid new password', async () => {
            await registerPage.fillNewPassword(password.weak);
            await Assertation.register.expectedNewPassword(page, 'invalid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC21-Leave password empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(firstName.valid);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(surName.valid);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(email.valid);
            await Assertation.register.expectedEmail(page, email.valid);
        });
        await registerPage.clickSignUpButton1time();
    });
})