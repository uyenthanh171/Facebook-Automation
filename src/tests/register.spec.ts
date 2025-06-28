import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import { assertation } from '../helpers/index.helpers';
import { testData } from '../data/index.data';
// import { dateOfBirth } from '../data/register.data';


test.describe('Register new account successfully', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.gototoRegisterForm();
        await page.getByRole('button', { name: 'Create new account' }).click();
    });
    test('TC01-Input valid value in all fields', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid)
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC02-Input valid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid leap year', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.validLeapYear);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.validLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC03-Select female for gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid);
        });
        await test.step('Select female gender', async () => {
            await registerPage.clickFemale();
            await assertation.expectedGender(page, testData.gender.female);
        });
        await test.step('Input valid email', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC04-Select custom gender (with she pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid);
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await assertation.expectedGender(page, testData.gender.custom);

            const expectedKey = testData.pronoun['She: \"Wish her a happy birthday!\"'];
            await registerPage.selectPronoun('1');
            await assertation.expectedPronoun(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC05-Select custom gender (with he pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid);
        });
        await test.step('Select custom gender with he', async () => {
            await registerPage.clickCustom();
            await assertation.expectedGender(page, testData.gender.custom)

            const expectedKey = testData.pronoun['He: \"Wish him a happy birthday!\"'];
            await registerPage.selectPronoun('2');
            await assertation.expectedPronoun(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC06-Select custom gender (with they pronoun)', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await assertation.expectedGender(page, testData.gender.custom);

            const expectedKey = testData.pronoun['They: \"Wish them a happy birthday!\"'];
            await registerPage.selectPronoun('6');
            await assertation.expectedPronoun(page, expectedKey);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid');
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC07-Select custom gender and input gender optional', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid');
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid');
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid);
        });
        await test.step('Select custom gender with they', async () => {
            await registerPage.clickCustom();
            await assertation.expectedGender(page, testData.gender.custom);

            const expectedKey = testData.pronoun['They: \"Wish them a happy birthday!\"'];
            await registerPage.selectPronoun('6');
            await assertation.expectedPronoun(page, expectedKey);
        });
        await test.step('Input value to gender optional field', async () => {
            const genderOptionalValue = testData.genderOptional.valid()
            await registerPage.fillGenderOptional(genderOptionalValue);
            await assertation.expectedGenderOptinal(page, genderOptionalValue);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid');
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC8-Input valid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid phone number', async () => {
            await registerPage.fillPhone(testData.phone.valid());
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
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
            await registerPage.fillFirstName(testData.firstName.short());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select day of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC011-Input short surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input short surname', async () => {
            await registerPage.fillSurName(testData.surName.short());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select day of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC012-Input invalid firstname', async ({ page }) => {
        await test.step('Input invalid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.invalid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC13-Input invalid surname', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input invalid surname', async () => {
            await registerPage.fillSurName(testData.surName.invalid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC14-Leave firstname empty', async ({ page }) => {
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC15-Leave surname empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC16-Input invalid DOB', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select invalid DOB', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.invalid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.invalid);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC17-Input invalid leap year', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select invalid leap year', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.invalidLeapYear);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.invalidLeapYear);
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid())
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid())
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC18-Leave DOB empty and click Sign Up button 1 time', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid())
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, 'male');
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC19-Leave DOB empty and click Sign Up button 2 times', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input valid numberphone', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton2times();
    });
    test('TC20-Select only custom gender', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select custom gender with she', async () => {
            await registerPage.clickCustom();
            await assertation.expectedGender(page, testData.gender.custom);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC21-Leave gender empty', async ({ page }) => {
        await test.step('Input valid value firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid value surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC22-Leave email/phone number empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC23-Input existing email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input existing email address', async () => {
            await registerPage.fillEmail(testData.email.existing());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC24-Input existing phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input existing phone number', async () => {
            await registerPage.fillPhone(testData.phone.existing());
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC25-Input invalid email', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input invalid email address - lackdomain', async () => {
            await registerPage.fillEmail(testData.email.lackDomain());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC26-Input invalid phone number', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input invalid phone number - OnlyAlpha ', async () => {
            await registerPage.fillPhone(testData.phone.onlyAlpha());
            await assertation.expectedPhone(page, 'valid')
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC27-Leave email/phone empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input new password', async () => {
            await registerPage.fillNewPassword(testData.password.valid());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC28-Input invalid password', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid')
        });
        await test.step('Input invalid new password', async () => {
            await registerPage.fillNewPassword(testData.password.onlyAlpha());
            await assertation.expectedNewPassword(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
    test('TC29-Leave password empty', async ({ page }) => {
        await test.step('Input valid firstname', async () => {
            await registerPage.fillFirstName(testData.firstName.valid());
            await assertation.expectedFirstName(page, 'valid')
        });
        await test.step('Input valid surname', async () => {
            await registerPage.fillSurName(testData.surName.valid());
            await assertation.expectedSurName(page, 'valid')
        });
        await test.step('Select valid date of birth', async () => {
            await registerPage.fillDateofBirth(testData.dateOfBirth.valid);
            await assertation.expectedDateofBirth(page, testData.dateOfBirth.valid)
        });
        await test.step('Select male gender', async () => {
            await registerPage.clickMale();
            await assertation.expectedGender(page, testData.gender.male);
        });
        await test.step('Input valid email address', async () => {
            await registerPage.fillEmail(testData.email.valid());
            await assertation.expectedEmail(page, 'valid')
        });
        await registerPage.clickSignUpButton1time();
    });
})