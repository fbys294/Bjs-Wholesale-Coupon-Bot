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
