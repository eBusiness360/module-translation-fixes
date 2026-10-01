/**
 * maxcode/module-translation-fixes — MIT, Copyright (c) 2026 eBusiness360 – Maxime LESGUILLIER.
 */
var config = {
    config: {
        mixins: {
            'Magento_MediaGalleryUi/js/grid/massaction/massactionView': {
                'Maxcode_TranslationFixes/js/media-gallery/massaction-view-mixin': true
            },
            'Magento_MediaGalleryUi/js/action/deleteImageWithDetailConfirmation': {
                'Maxcode_TranslationFixes/js/media-gallery/delete-image-confirmation-mixin': true
            }
        }
    }
};
