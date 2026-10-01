# Changelog — maxcode/module-translation-fixes

## [1.0.0] — 2026-10-01

First public release.

### Added
- “Login as Customer” button label passed through `__()`.
- Media gallery: “Manage Gallery” and “Media Gallery” passed through `$t()`. Repairs the
  “Delete Images” mode in any translated admin (the page title was compared to the English text;
  “Media Gallery” is already translated by community language packs, so the slide panel opened
  from a product page was broken).
- Media gallery: the image deletion confirmation finds the “Used In” section whether its title is
  in English or translated. Before, any translation of “Used In” silently removed the warning
  listing the content that uses the image.

### Compatibility
- No dependency on the fixed modules: a store that removed `Magento_LoginAsCustomerAdminUi` or
  `Magento_MediaGalleryUi` (Composer `replace`) still compiles — a plugin on an absent class is
  ignored by `setup:di:compile` (checked on 2.4.8-p5), and the RequireJS mixin only applies when
  its target module is loaded.
