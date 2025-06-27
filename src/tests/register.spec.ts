import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import { Assertation } from '../helpers/index.helpers';
import { TestData } from '../data/index.data';
import { dateOfBirth } from '../data/register.data';


test.describe('Register new account successfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC01-Input valid value in all fields', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, TestData.dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input valid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid leap year', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.validLeapYear);
            await Assertation.register.expectedDateofBirth(page, TestData.dateOfBirth.validLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Select female for gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select female gender', async () => {
            await registerPage.clickFemale();
            await Assertation.register.expectedGender(page, TestData.gender.female);
        });
        await test.step('Input valid email', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Select custom gender (with she pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, TestData.gender.custom);

            const expectedKey = TestData.pronoun['She: \"Wish her a happy birthday!\"'];

            await registerPage.selectPronoun('1');
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Select custom gender (with he pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with he', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, TestData.gender.custom);

            const expectedKey = TestData.pronoun['He: \"Wish him a happy birthday!\"'];

            await registerPage.selectPronoun('2');
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Select custom gender (with they pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, TestData.gender.custom);

            const expectedKey = TestData.pronoun['They: \"Wish them a happy birthday!\"'];

            await registerPage.selectPronoun('6');
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Select custom gender and input gender optional', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, TestData.gender.custom);
            const expectedKey = TestData.pronoun['They: \"Wish them a happy birthday!\"'];
            await registerPage.selectPronoun('6');
            await Assertation.register.expectedCustomGender(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input value to gender optional field', async () => {
            const genderValue = TestData.genderOptional.valid()
            await registerPage.fillGenderOptional(genderValue);
            await Assertation.register.expectedGenderOptinal(page, genderValue);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC8-Input valid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid phone number', async () => {
            await registerPage.fillPhone(TestData.phone.valid());
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC09-Input with exsiting information', async ({ page }) => {

    })
});

test.describe('Register new account unsuccessfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC010-Input short firstname', async ({ page }) => {
        await test.step('Input short firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.short());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC011-Input short surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input short surname', async () => {
            await registerPage.fillSurName(TestData.surName.short());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select day of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC012-Input invalid firstname', async ({ page }) => {
        await test.step('Input invalid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.invalid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC13-Input invalid surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input invalid surname', async () => {
            await registerPage.fillSurName(TestData.surName.invalid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Leave firstname empty', async ({ page }) => {
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC15-Leave surname empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC16-Input invalid DOB', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid DOB', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.invalid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.invalid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC17-Input invalid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select invalid leap year', async () => {
            await registerPage.fillDateofBirth(dateOfBirth.invalidLeapYear);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.invalidLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC18-Leave DOB empty and click Sign Up button 1 time', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC19-Leave DOB empty and click Sign Up button 2 times', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton2times();
    });
    test('TC20-Select only custom gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await Assertation.register.expectedGender(page, TestData.gender.custom);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC21-Leave gender empty', async ({ page }) => {
        await test.step('Input valid value firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid value surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC22-Leave email/phone number empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC23-Input existing email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input existing email address', async () => {
            await registerPage.fillEmail(TestData.email.existing);
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC24-Input existing phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input existing phone number', async () => {
            await registerPage.fillPhone(TestData.phone.existing);
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC25-Input invalid email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input invalid email address - lackdomain', async () => {
            await registerPage.fillEmail(TestData.email.lackDomain());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC26-Input invalid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input invalid phone number - OnlyAlpha ', async () => {
            await registerPage.fillPhone(TestData.phone.onlyAlpha());
            await Assertation.register.expectedPhone(page);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC27-Leave email/phone empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(TestData.password.valid());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC28-Input invalid password', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await test.step('Input invalid new password', async () => {
            await registerPage.fillNewPassword(TestData.password.onlyAlpha());
            await Assertation.register.expectedNewPassword(page);
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC29-Leave password empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(TestData.firstName.valid());
            await Assertation.register.expectedFirstName(page);
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(TestData.surName.valid());
            await Assertation.register.expectedSurName(page);
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(TestData.dateOfBirth.valid);
            await Assertation.register.expectedDateofBirth(page, dateOfBirth.valid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await Assertation.register.expectedGender(page, TestData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(TestData.email.valid());
            await Assertation.register.expectedEmail(page);
        });
        await registerPage.clickSignUpButton1time();
    });
})