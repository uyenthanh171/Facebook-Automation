import { Page, expect } from '@playwright/test';
import { TestData } from '../data/index.data';
import { isEmail, isPhone } from '../utils/regex.utils';



export async function expectedFirstName(page: Page) {
    const firstNameInput = page.getByLabel('First name');
    const actualFirstName = await firstNameInput.inputValue()
    if (actualFirstName === TestData.register.validFirstName) {
        await expect(firstNameInput).toHaveValue(TestData.register.validFirstName)
    } else if (actualFirstName === TestData.register.shortFirstName) {
        await expect(firstNameInput).toHaveValue(TestData.register.shortFirstName)
    }
} // con thieu mot vai truong hop khac

export async function expectedSurName(page: Page) {
    const surNameInput = page.getByLabel('Surname');
    const actualSurName = await surNameInput.inputValue()
    if (actualSurName === TestData.register.validSurName) {
        await expect(surNameInput).toHaveValue(TestData.register.validSurName);
    } else if (actualSurName === TestData.register.shortSurName) {
        await expect(surNameInput).toHaveValue(TestData.register.shortSurName)
    }

} // con thieu mot vai truong hop khac

export async function expectedDateofBirth(page: Page, dob: { day: string | number, month: string | number, year: string | number }) {
    const { day, month, year } = dob
    const dayInput = page.getByLabel('Day');
    const monthInput = page.getByLabel('Month');
    const yearInput = page.getByLabel('Year');
    const expectedDay = String(day);
    const expectedMonth = String(month);
    const expectedYear = String(year)
    await expect(dayInput).toHaveValue(expectedDay);
    await expect(monthInput).toHaveValue(expectedMonth);
    await expect(yearInput).toHaveValue(expectedYear);
} // con thieu mot vai truong hop khac 

export async function expectedGender(page: Page, expectedGender: 'Male' | 'Female' | 'Custom') {
    const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    const femaleRadio = page.getByRole('radio', { name: 'Female', exact: true });
    const customRadio = page.getByRole('radio', { name: 'Custom', exact: true });
    if (expectedGender === TestData.register.maleOption) {
        await expect(maleRadio).toBeChecked();
    } else if (expectedGender === TestData.register.femaleOption) {
        await expect(femaleRadio).toBeChecked();
    } else if (expectedGender === TestData.register.customOption) {
        await expect(customRadio).toBeChecked();
    }
}

export async function expectedCustomGender(page: Page, expectedKey: '1' | '2' | '6') {
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

export async function expectedGenderOptinal(page: Page) {
    const genderOptionalInput = page.locator('#custom_gender');
    await expect(genderOptionalInput).toHaveValue(TestData.register.validGenderOptional)
}

export async function expectedEmail(page: Page, caseType: 'valid' | 'invalid' | 'existing') {
    const EmailorPhoneInput = page.getByLabel('Mobile number or email address');
    const actualEmailInput = await EmailorPhoneInput.inputValue();
    if (caseType === 'valid') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.validEmail);
        expect(isEmail(actualEmailInput)).toBe(true);
    } else if (caseType === 'invalid') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.invalidEmail);
        expect(isEmail(actualEmailInput)).toBe(false)
    } else if (caseType === 'existing') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.existingEmail);
    }
}

export async function expectedPhone(page: Page, caseType: 'valid' | 'invalid' | 'existing') {
    const EmailorPhoneInput = page.getByLabel('Mobile number or email address');
    const acutalPhoneInput = await EmailorPhoneInput.inputValue();
    if (caseType === 'valid') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.validPhone);
        expect(isPhone(acutalPhoneInput)).toBe(true);
    } else if (caseType === 'invalid') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.invalidPhone);
    } else if (caseType === 'existing') {
        await expect(EmailorPhoneInput).toHaveValue(TestData.register.existingPhone)
    }
}

export async function expectedNewPassword(page: Page, caseType: 'valid' | 'invalid') {
    const newPassword = page.getByLabel('New password');
    if (caseType === 'valid') {
        await expect(newPassword).toHaveValue(TestData.register.validPassword)
    } else if (caseType === 'invalid') {
        await expect(newPassword).toHaveValue(TestData.register.weakPassword)
    }
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