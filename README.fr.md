<div align="center">

[English](README.md) · **Français**

# Maxcode Translation Fixes pour Magento 2

**Rend traduisibles les chaînes que Magento oublie de traduire. Aucune traduction incluse, fonctionne avec toutes les langues.**

![Licence : MIT](https://img.shields.io/badge/licence-MIT-1E4FA3)
![Magento 2.4](https://img.shields.io/badge/Magento-2.4.x-F26322)
![PHP 8.1+](https://img.shields.io/badge/PHP-8.1%2B-777BB4)
![Packagist](https://img.shields.io/packagist/v/maxcode/module-translation-fixes?color=0F1E4D)

</div>

## Ce que fait le module

Rend traduisibles des chaînes que Magento affiche sans les faire passer par `__()` ou `$t()`.
**Il ne contient aucune traduction et fonctionne pour toutes les langues** : les traductions viennent de votre
pack de langue (pour le français, [`maxcode/language-fr_fr`](https://github.com/eBusiness360/language-fr_fr)).

| Correctif | Chaînes rendues traduisibles |
|---|---|
| Bouton « Login as Customer » (pages client et commande) | `Login as Customer` |
| Galerie multimédia de l'administration | `Manage Gallery`, `Media Gallery` (répare aussi le mode « Delete Images » une fois ces chaînes traduites) |
| Confirmation de suppression d'image | `Used In` (l'avertissement « utilisée dans les contenus suivants » survit à sa traduction) |

## Installation

```bash
composer require maxcode/module-translation-fixes
bin/magento setup:upgrade
```

## Changelog

Voir [CHANGELOG.md](CHANGELOG.md).

## Licence

MIT, © 2026 eBusiness360 – Maxime LESGUILLIER. Voir [LICENSE](LICENSE).
