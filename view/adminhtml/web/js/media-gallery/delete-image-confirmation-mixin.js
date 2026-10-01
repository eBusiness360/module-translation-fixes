/**
 * maxcode/module-translation-fixes — MIT, Copyright (c) 2026 eBusiness360 – Maxime LESGUILLIER.
 *
 * deleteImageWithDetailConfirmation.js repere la section « Used In » des details
 * d'une image par son titre : section.title === 'Used In'. Ce titre est traduit
 * cote serveur (GetAssetDetails : __('Used In')), donc dans toute autre langue
 * la comparaison echoue et la confirmation de suppression n'avertit plus que
 * l'image est utilisee dans des contenus. On accepte le titre anglais OU sa
 * traduction ; le reste de la methode est celui de Magento 2.4.8.
 */
define([
    'jquery',
    'underscore',
    'mage/translate'
], function ($, _, $t) {
    'use strict';

    return function (action) {
        /**
         * @param {Object|String} images
         * @return {String}
         */
        action.getRecordRelatedContentMessage = function (images) {
            var usedInMessage = $t('The selected assets are used in the content of the following entities: '),
                titres = ['Used In', $t('Used In')],
                usedIn = {};

            $.each(images, function (key, image) {
                $.each(image.details, function (sectionIndex, section) {
                    if (_.isObject(section) && titres.indexOf(section.title) !== -1 && !_.isEmpty(section.value)) {
                        $.each(section.value, function (entityTypeIndex, entityTypeData) {
                            usedIn[entityTypeData.name] = entityTypeData.name in usedIn ?
                                usedIn[entityTypeData.name] + entityTypeData.number :
                                entityTypeData.number;
                        });
                    }
                });
            });

            if (_.isEmpty(usedIn)) {
                return '';
            }

            return usedInMessage + this.usedInObjectToString(usedIn);
        };

        return action;
    };
});
