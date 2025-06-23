import { Page } from '@playwright/test';
import { TestData } from '../data/index.data';
import { Assertation } from '../helpers/index.helpers';
import { RegisterPage } from '../pages/register';

export async function pronounHelpers(
    page: Page,
    registerPage: RegisterPage,
    pronounValue: '1' | '2' | '6'
) {
    const expectedKey = TestData.register.pronoun[pronounValue].key;
    await registerPage.selectPronoun(pronounValue);
    await Assertation.register.expectedCustomGender(page, expectedKey);
}
