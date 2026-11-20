<div align="center">

**English** · [Français](README.fr.md)

# Maxcode Translation Fixes for Magento 2

**Makes translatable the strings Magento forgets to translate. No translation included, works with every language.**

![License: MIT](https://img.shields.io/badge/license-MIT-1E4FA3)
![Magento 2.4](https://img.shields.io/badge/Magento-2.4.x-F26322)
![PHP 8.1+](https://img.shields.io/badge/PHP-8.1%2B-777BB4)
![Packagist](https://img.shields.io/packagist/v/maxcode/module-translation-fixes?color=0F1E4D)

</div>

## What it does

Makes translatable some strings that Magento displays without passing them through `__()` or `$t()`.
**It contains no translation and works for every language**: the translations come from your
language pack (for French, [`maxcode/language-fr_fr`](https://github.com/eBusiness360/language-fr_fr)).

| Fix | Strings made translatable |
|---|---|
| “Login as Customer” button (customer and order pages) | `Login as Customer` |
| Admin media gallery | `Manage Gallery`, `Media Gallery` (also repairs the “Delete Images” mode once they are translated) |
| Image deletion confirmation | `Used In` (the “used in the following content” warning survives its translation) |

## Installation

```bash
composer require maxcode/module-translation-fixes
bin/magento setup:upgrade
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

MIT, © 2026 eBusiness360 – Maxime LESGUILLIER. See [LICENSE](LICENSE).
