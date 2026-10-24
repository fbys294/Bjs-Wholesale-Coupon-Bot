# BJ's Wholesale Coupon Automation (Not a Traditional Bot)

A lightweight browser script to automatically clip coupons from BJ's Wholesale Club while you're on the coupons page.

## Quick Start

1. Sign in to your BJ's account at https://www.bjs.com/myCoupons.
2. Open the coupon page and make sure you can see the available coupons.
3. Open your browser developer tools and switch to the Console tab.
4. Paste the following code and press Enter:

```javascript
(() => {
    // Select all clip buttons on the page
    const buttons = document.querySelectorAll('button[name="clipToCard"], [aria-label*="Clip"]');
    let count = 0;

    if (buttons.length === 0) {
        console.log("No available coupon buttons found on the page.");
        return;
    }

    buttons.forEach((button, index) => {
        // Optional delay to prevent instant spamming
        setTimeout(() => {
            if (button && typeof button.click === 'button' || button.click) {
                button.click();
                count++;
                console.log(`Clipping coupon ${count} of ${buttons.length}...`);
            }
        }, index * 300); // 300ms delay between clicks
    });
})();
```

5. The script will click each visible coupon button with a short delay.
6. If some coupons remain, run the script again after the page has loaded more offers.

## What This Does

This script looks for coupon buttons on BJ's page and clicks them automatically. It adds a short delay between clicks so it doesn't spam the page too aggressively.

## Notes

- Use it only while you are signed in to BJ's and on the coupons page.
- This is intended for personal use and should be used in accordance with the website's terms.
- If the page changes its layout, you may need to update the selectors.

## License

MIT
