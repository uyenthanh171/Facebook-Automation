import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import { Assertation } from '../helpers/index.helpers';
import { TestData } from '../data/index.data';
import { PronounValue, validDOB } from '../data/register.data';

test.describe('Register new account successfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC01-Input valid value in all fields', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input valid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid leap year', async () => {
            await registerPage.fillDateofBirth(TestData.register.validLeapYear);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Select female for gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validDOB);
        });
        await test.step('Select female gender', async () => {
            await registerPage.clickFemale();
            await Assertation.register.expectedGender(page, 'Female');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.register.validPhone);
            await Assertation.register.expectedPhone(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Select custom gender (with she pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validDOB);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, 'Custom');

            const fixedValue: PronounValue = '1';
            const expectedKey = TestData.register.PronounMap[fixedValue].key;
            await registerPage.selectPronoun(fixedValue);
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Select custom gender (with he pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validDOB);
        });
        await test.step('Select custom gender with he', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, 'Custom');

            const fixedValue: PronounValue = '2';
            const expectedKey = TestData.register.PronounMap[fixedValue].key;
            await registerPage.selectPronoun(fixedValue);
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Select custom gender (with they pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validDOB);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, 'Custom');

            const fixedValue: PronounValue = '6';
            const expectedKey = TestData.register.PronounMap[fixedValue].key;
            await registerPage.selectPronoun(fixedValue);
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Select custom gender and input gender optional', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, TestData.register.validDOB);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            const fixedValue: PronounValue = '1';
            const expectedKey = TestData.register.PronounMap[fixedValue].key;
            await registerPage.selectPronoun(fixedValue);
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input value to gender optional field', async () => {
            await registerPage.fillGenderOptional(TestData.register.validGenderOptional);
            await Assertation.register.expectedGenderOptinal(page);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC8-Input valid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid phone number', async () => {
            await registerPage.fillPhone(TestData.register.validPhone);
            await Assertation.register.expectedPhone(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
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
            await registerPage.fillFirstName(TestData.register.shortFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.register.validPhone);
            await Assertation.register.expectedPhone(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input short surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input short surname', async () => {
            await registerPage.fillSurName(TestData.register.shortSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.register.validPhone);
            await Assertation.register.expectedPhone(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Input invalid firstname', async ({ page }) => {
        await test.step('Input invalid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.invalidFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Input invalid surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input invalid surname', async () => {
            await registerPage.fillSurName(TestData.register.invalidSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Leave firstname empty', async ({ page }) => {
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Leave surname empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Input invalid DOB', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid DOB', async () => {
            await registerPage.fillDateofBirth(TestData.register.invalidDOB1);
            await Assertation.register.expectedDateofBirth(page, TestData.register.invalidDOB1);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC08-Input invalid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid leap year', async () => {
            await registerPage.fillDateofBirth(TestData.register.invalidLeapYear);
            await Assertation.register.expectedDateofBirth(page, TestData.register.invalidLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC09-Leave DOB empty and click Sign Up button 1 time', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC10-Leave DOB empty and click Sign Up button 2 times', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.register.validPhone);
            await Assertation.register.expectedPhone(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton2times();
    });
    test('TC11-Select only custom gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, 'Custom');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC12-Leave gender empty', async ({ page }) => {
        await test.step('Input valid value firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid value surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC13-Leave email/phone number empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Input existing email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input existing email address', async () => {
            await registerPage.fillEmail(TestData.register.existingEmail);
            await Assertation.register.expectedEmail(page, 'existing');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Input existing phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input existing phone number', async () => {
            await registerPage.fillPhone(TestData.register.existingPhone);
            await Assertation.register.expectedPhone(page, 'existing');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC16-Input invalid email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input invalid email address', async () => {
            await registerPage.fillEmail(TestData.register.invalidEmail);
            await Assertation.register.expectedEmail(page, 'invalid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC17-Input invalid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input invalid phone number', async () => {
            await registerPage.fillPhone(TestData.register.invalidPhone);
            await Assertation.register.expectedPhone(page, 'invalid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC18-Leave email empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC19-Leave number phone empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input invalid password', async () => {
            await registerPage.fillNewPassword(TestData.register.validPassword);
            await Assertation.register.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC20-Input invalid password', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await test.step('Input invalid new password', async () => {
            await registerPage.fillNewPassword(TestData.register.weakPassword);
            await Assertation.register.expectedNewPassword(page, 'invalid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC21-Leave password empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.register.validFirstName);
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.register.validSurName);
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.register.validDOB);
            await Assertation.register.expectedDateofBirth(page, validDOB);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, 'Male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.register.validEmail);
            await Assertation.register.expectedEmail(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
})