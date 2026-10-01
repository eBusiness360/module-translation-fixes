/**
 * maxcode/module-translation-fixes — MIT, Copyright (c) 2026 eBusiness360 – Maxime LESGUILLIER.
 *
 * massactionView.js porte « Manage Gallery » et « Media Gallery » EN DUR, puis
 * cherche le titre de page par $('h1:contains(<ce texte anglais>)'). Le titre
 * etant traduit cote serveur, la comparaison echoue dans toute autre langue et
 * le mode « Supprimer des images » vise un conteneur inexistant. On fait
 * passer ces deux valeurs par $t() : titre et comparaison utilisent le meme
 * texte, quelle que soit la langue.
 */
define(['mage/translate'], function ($t) {
    'use strict';

    return function (MassactionView) {
        return MassactionView.extend({
            defaults: {
                standAloneTitle: $t('Manage Gallery'),
                slidePanelTitle: $t('Media Gallery')
            }
        });
    };
});
