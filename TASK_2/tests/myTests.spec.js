// @ts-nocheck
const { test, expect } = require('@playwright/test');


test('locator.fill', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('#firstName').fill('Olga');
  const locator1 = page.locator('#firstName');
  await expect(locator1).toHaveValue('Olga');

});


test('locator.check.radiobutton', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByText('Other').check(); 
  const locator2 = page.getByText('Other');
  await expect(locator2).toBeChecked();

});


test('locator.check.checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByText('Music').click({force: true});
  const locator3 = page.getByText('Music')
  await expect(locator3).toBeChecked();

});

test('locator.selectOption', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.locator('#oldSelectMenu').selectOption('Blue');
  const locator4 = page.locator('#oldSelectMenu');
  await expect(locator4).toHaveValue('1');

});

test('locator.click', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  await page.getByText('Double Click Me').dblclick();
  const locator5 = page.getByText('You have done a double click');
  await expect(locator5).toBeVisible();

});

test('locator.hover', async ({ page }) => {
  await page.goto('https://demoqa.com/menu#');
  await page.getByRole('listitem').filter({ hasText: 'Main Item 1'}).hover();
  const locator6 = page.getByRole('listitem').filter({ hasText: 'Main Item 1'});
  await expect(locator6).toHaveCSS('background-color', 'rgb(0, 63, 32)');
});

test('locator.setInputFiles', async ({ page }) => {
  const testDoc = 'TASK_2/tests/testDoc.txt';
  await page.goto('https://demoqa.com/upload-download');
  await page.locator('#uploadFile').setInputFiles(testDoc);
  const locator7 = page.locator('#uploadedFilePath');
  await expect(locator7).toHaveText('C:\\fakepath\\testDoc.txt');

});


test('locator.press', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder('UserName').press('Shift+A');
  const locator8 = page.getByPlaceholder('UserName');
  await expect(locator8).toHaveValue('A');

});

test('locator.drag&drop', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');
  await page.locator('//*[@id="draggable"]').hover();
  await page.mouse.down();
  await page.locator('#simpleDropContainer #droppable').hover();
  await page.mouse.up();
  await expect (page.getByText('Dropped')).toBeVisible()

});
