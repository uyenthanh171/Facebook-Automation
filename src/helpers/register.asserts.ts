import { Page, expect , Locator } from '@playwright/test';
import { testData } from '../data/index.data';

export async function expectedFirstName(page: Page, type: keyof typeof testData.firstName) {

    const firstNameInput = page.getByLabel('First name');
    const expectedFirstNameInput = testData.firstName[type]();
    const actualFirstNameInput = await firstNameInput.inputValue();
    expect(actualFirstNameInput).toEqual(expectedFirstNameInput)
}

export async function expectedSurName(page: Page, type: keyof typeof testData.surName) {
    const surNameInput = page.getByLabel('Surname');
    const expectedSurNameInput = testData.surName[type]();
    const actualSurNameInput = await surNameInput.inputValue();
    expect(actualSurNameInput).toEqual(expectedSurNameInput)
}

export async function expectedDateofBirth(page: Page, dob: { day: string | number, month: string | number, year: string | number }) {
    const { day, month, year } = dob
    const dayInput = page.getByLabel('Day');
    const monthInput = page.getByLabel('Month');
    const yearInput = page.getByLabel('Year');
    await expect(dayInput).toHaveValue(String(day));
    await expect(monthInput).toHaveValue(String(month));
    await expect(yearInput).toHaveValue(String(year));
}

export async function expectedGender(page: Page, expectedGender: string) {
    const { male, female, custom } = testData.gender
    const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    const femaleRadio = page.getByRole('radio', { name: 'Female', exact: true });
    const customRadio = page.getByRole('radio', { name: 'Custom', exact: true });
    if (expectedGender === male) {
        await expect(maleRadio).toBeChecked();
    } else if (expectedGender === female) {
        await expect(femaleRadio).toBeChecked();
    } else if (expectedGender === custom) {
        await expect(customRadio).toBeChecked();
    }
}

export async function expectedPronoun(page: Page, expectedKey: string) {
    const PronounDropdownList = page.locator('#preferred_pronoun');
    let expectedLabel = '';
    if (expectedKey === '1') {
        expectedLabel = 'She: "Wish her a happy birthday!"';
        await expect(PronounDropdownList).toHaveValue('1')
    } else if (expectedKey === '2') {
        expectedLabel = 'He: "Wish him a happy birthday!"';
        await expect(PronounDropdownList).toHaveValue('2');
    } else if (expectedKey === '6') {
        expectedLabel = 'They: "Wish them a happy birthday!"';
        await expect(PronounDropdownList).toHaveValue('6');
    }
}

export async function expectedGenderOptinal(page: Page, genderOptional: string) {
    const genderOptionalInput = page.locator('#custom_gender');
    await expect(genderOptionalInput).toHaveValue(genderOptional)
}

export async function expectedEmail(page: Page, type: keyof typeof testData.email) {
    const emailnPhoneInput = page.getByLabel('Mobile number or email address');
    const expectedEmailInput = testData.email[type]();
    const actualEmailInput = await emailnPhoneInput.inputValue();
    expect(actualEmailInput).toEqual(expectedEmailInput);
}

export async function expectedPhone(page: Page, type: keyof typeof testData.phone) {

    const emailnPhoneInput = page.getByLabel('Mobile number or email address');
    const expectedPhoneInput = testData.phone[type]();
    const actualPhoneInput = await emailnPhoneInput.inputValue();
    expect(actualPhoneInput).toEqual(expectedPhoneInput);
}

export async function expectedNewPassword(page: Page, type: keyof typeof testData.password) {

    const newPassword = page.getByLabel('New password');
    const expectedPasswordInput = testData.password[type]();
    const actualPasswordInput = await newPassword.inputValue();
    expect(actualPasswordInput).toEqual(expectedPasswordInput);
}

export async function expectedSignUpResponse(page: Page) {
    const duplicatePopup = page.getByText('Do you already have a Facebook account').first();
    const alertMessage = page.getByText('There was an error with your registration. Please try registering again.');
    const currentURL = await page.url();
    if (await duplicatePopup.isVisible()) {
        await expect(duplicatePopup).toHaveText('');
    } else if (currentURL.includes('/confirmemail.php?next=')) {
        await expect(page).toHaveURL(/\/confirmemail\.php\?next=/);
    } else if (await alertMessage.isVisible()) {
        await expect(alertMessage).toHaveText('');
    }
}

export async function expectedAgeResponse(page: Page) {
    const clickSignUp1sttime = page.getByText("It looks like you've entered the wrong info. Please make sure that you use your real date of birth.");
    const clickSignUp2ndtime = page.locator('#birthday_age_inner')
    if (await clickSignUp1sttime.isVisible()) {
        await expect(clickSignUp1sttime).toHaveText("It looks like you've entered the wrong info. Please make sure that you use your real date of birth.")
    } else if (await clickSignUp2ndtime.isVisible()) {
        await expect(clickSignUp2ndtime).toHaveId('#birthday_age_inner')
    }
}

export async function expectedShortnameResponse(page: Page) {
    const shortnameAlert = page.getByText('There is a limit on how short first names or surnames can be on Facebook.');
    const shortnameError = page.getByText('An error occurred. Please try again.')
    if (await shortnameAlert.isVisible()) {
        await expect(shortnameAlert).toHaveText('There is a limit on how short first names or surnames can be on Facebook.');
    } else if (await shortnameError.isVisible({ timeout: 3000 })) {
        await expect(shortnameError).toHaveText('There is a limit on how short first names or surnames can be on Facebook.')
    }
}