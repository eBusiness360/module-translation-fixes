# Translation fixes for Magento 2

Makes translatable some strings that Magento displays without passing them through `__()` or `$t()`.
**It contains no translation and works for every language**: the translations come from your
language pack (for French, [`maxcode/language-fr_fr`](https://github.com/eBusiness360/language-fr_fr)).

| Fix | Strings made translatable |
|---|---|
| “Login as Customer” button (customer and order pages) | `Login as Customer` |
| Admin media gallery | `Manage Gallery`, `Media Gallery` (also repairs the “Delete Images” mode once they are translated) |

    composer require maxcode/module-translation-fixes
    bin/magento setup:upgrade

MIT licence — © 2026 eBusiness360 – Maxime LESGUILLIER.
