import { Page, expect } from '@playwright/test';
import { TestData } from '../data/index.data';
import { isEmail, isPhone } from '../utils/regex.utils';

export async function expectedFirstName(page: Page) {
    const { firstName } = TestData.register;

    const firstNameInput = page.getByLabel('First name');
    const actualFirstName = await firstNameInput.inputValue();

    if (actualFirstName === firstName.valid) {
        await expect(firstNameInput).toHaveValue(firstName.valid);
    } else if (actualFirstName === firstName.short) {
        await expect(firstNameInput).toHaveValue(firstName.short);
    }
}

export async function expectedSurName(page: Page) {
    const { surName } = TestData.register;

    const surNameInput = page.getByLabel('Surname');
    const actualSurName = await surNameInput.inputValue();

    if (actualSurName === surName.valid) {
        await expect(surNameInput).toHaveValue(surName.valid);
    } else if (actualSurName === surName.short) {
        await expect(surNameInput).toHaveValue(surName.short);
    }

} // con thieu mot vai truong hop khac

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
    const { male, female, custom } = TestData.register.gender
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

export async function expectedCustomGender(page: Page, expectedKey: string) {
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
    await expect(genderOptionalInput).toHaveValue(TestData.register.genderOptional.valid)
}

export async function expectedEmail(page: Page, caseType: string) {
    const { email } = TestData.register
    const EmailorPhoneInput = page.getByLabel('Mobile number or email address');
    const actualEmailInput = await EmailorPhoneInput.inputValue();
    if (caseType === 'valid') {
        await expect(EmailorPhoneInput).toHaveValue(email.valid);
        expect(isEmail(actualEmailInput)).toBe(true);
    } else if (caseType === 'invalid') {
        await expect(EmailorPhoneInput).toHaveValue(email.invalid);
        expect(isEmail(actualEmailInput)).toBe(false)
    } else if (caseType === 'existing') {
        await expect(EmailorPhoneInput).toHaveValue(email.existing);
    }
}

export async function expectedPhone(page: Page, caseType: string) {
    const { phone } = TestData.register
    const EmailorPhoneInput = page.getByLabel('Mobile number or email address');
    const acutalPhoneInput = await EmailorPhoneInput.inputValue();
    if (caseType === 'valid') {
        await expect(EmailorPhoneInput).toHaveValue(phone.valid);
        expect(isPhone(acutalPhoneInput)).toBe(true);
    } else if (caseType === 'invalid') {
        await expect(EmailorPhoneInput).toHaveValue(phone.invalid);
    } else if (caseType === 'existing') {
        await expect(EmailorPhoneInput).toHaveValue(phone.existing)
    }
}

export async function expectedNewPassword(page: Page, caseType: string) {
    const { password } = TestData.register
    const newPassword = page.getByLabel('New password');
    if (caseType === 'valid') {
        await expect(newPassword).toHaveValue(password.valid)
    } else if (caseType === 'invalid') {
        await expect(newPassword).toHaveValue(password.weak)
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