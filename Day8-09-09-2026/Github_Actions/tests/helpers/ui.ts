import { expect, type Page } from '@playwright/test';

export async function dismissDemoWarning(page: Page) {
  const continueButton = page.getByRole('button', { name: /I Understand & Continue/i });
  if (await continueButton.count()) {
    await continueButton.click();
  }
}

export async function openHotelSearch(page: Page) {
  await dismissDemoWarning(page);
  await page.getByText('Destination or Hotel Name', { exact: false }).click();
  const destination = page.locator('#st_dest_q');
  await expect(destination).toBeVisible();
  return destination;
}

export async function fillHotelSearch(page: Page, data: { destination: string; checkIn: string; checkOut: string }) {
  const destination = await openHotelSearch(page);
  await page.evaluate(
    (value) => {
      const input = document.querySelector('#st_dest_q') as HTMLInputElement | null;
      if (!input) {
        return;
      }

      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    },
    data.destination
  );

  await page.evaluate(
    ({ checkIn, checkOut }) => {
      const setValue = (selector: string, value: string) => {
        const input = document.querySelector(selector) as HTMLInputElement | null;
        if (!input) {
          return;
        }

        input.removeAttribute('readonly');
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      };

      setValue("input[name='checkin_date']", checkIn);
      setValue("input[name='checkout_date']", checkOut);
    },
    { checkIn: data.checkIn, checkOut: data.checkOut }
  );

  const checkIn = page.locator("input[name='checkin_date']");
  const checkOut = page.locator("input[name='checkout_date']");

  return { destination, checkIn, checkOut };
}