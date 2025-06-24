import { Page, Locator } from '@playwright/test'
import { TestData } from '../data/index.data';

export interface RegisterFormData {
    firstName: string;
    surName: string;
    day: string | number;
    month: string | number;
    year: string | number;
    gender: 'Male' | 'Female' | 'Custom';
    genderPronounce: string;
    genderOption: string;
    email: string;
    phone: string;
    newPassword: string;
}

export class RegisterPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly surNameInput: Locator;
    readonly dayInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly genderMaleRadio: Locator;
    readonly genderFemaleRadio: Locator;
    readonly genderCustomRadio: Locator;
    readonly PronounDropdownList: Locator;
    readonly genderOptionalInput: Locator
    readonly emailOrPhoneInput: Locator;
    readonly newPasswordInput: Locator;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByLabel('First name');
        this.surNameInput = page.getByLabel('Surname');
        this.dayInput = page.getByLabel('Day');
        this.monthInput = page.getByLabel('Month');
        this.yearInput = page.getByLabel('Year');
        this.genderMaleRadio = page.getByRole('radio', { name: 'Male', exact: true });
        this.genderFemaleRadio = page.getByRole('radio', { name: 'Female', exact: true });
        this.genderCustomRadio = page.getByRole('radio', { name: 'Custom', exact: true });
        this.PronounDropdownList = page.locator('#preferred_pronoun');
        this.genderOptionalInput = page.locator('#custom_gender')
        this.emailOrPhoneInput = page.getByLabel('Mobile number or email address')
        this.newPasswordInput = page.locator('#password_step_input');
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    }

    async gototoRegisterForm() {
        await this.page.goto('https://www.facebook.com/');
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async fillSurName(surName: string) {
        await this.surNameInput.fill(surName);
    }

    async fillDateofBirth({ day, month, year }: { day: string; month: string; year: string }) {
        await this.dayInput.selectOption(day);
        await this.monthInput.selectOption(month);
        await this.yearInput.selectOption(year);
    }

    async clickFemale() {
        await this.genderFemaleRadio.click();
    }

    async clickMale() {
        await this.genderMaleRadio.click();
    }

    async clickCustom() {
        await this.genderCustomRadio.click();
    }

    async selectPronoun(genderLabel: string) {
        const pronounValue = TestData.register.pronoun[genderLabel];
        await this.PronounDropdownList.selectOption(pronounValue);
    }

    async fillGenderOptional(genderOption: string) {
        await this.genderOptionalInput.fill(genderOption)
    }

    async fillEmail(email: string) {
        await this.emailOrPhoneInput.fill(email);
    }

    async fillPhone(phone: string) {
        await this.emailOrPhoneInput.fill(phone);
    }

    async fillNewPassword(newPassword: string) {
        await this.newPasswordInput.fill(newPassword);
    }

    async clickSignUpButton1time() {
        await this.signUpButton.click();
    }

    async clickSignUpButton2times() {
        await this.signUpButton.dblclick();
    }
}
