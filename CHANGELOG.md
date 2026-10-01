# Changelog — maxcode/module-translation-fixes

## [Unreleased]

### Added
- “Login as Customer” button label passed through `__()`.
- Media gallery: “Manage Gallery” and “Media Gallery” passed through `$t()`. Repairs the
  “Delete Images” mode in any translated admin (the page title was compared to the English text;
  “Media Gallery” is already translated by community language packs, so the slide panel opened
  from a product page was broken).
