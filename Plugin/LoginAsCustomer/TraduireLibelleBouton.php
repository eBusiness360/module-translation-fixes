<?php
/**
 * maxcode/module-translation-fixes — MIT, Copyright (c) 2026 eBusiness360 – Maxime LESGUILLIER.
 */
declare(strict_types=1);

namespace Maxcode\TranslationFixes\Plugin\LoginAsCustomer;

use Magento\Framework\Phrase;

/**
 * Le libelle « Login as Customer » est declare translatable="true" dans le
 * di.xml de Magento_LoginAsCustomerAdminUi, mais dans un TABLEAU d'arguments :
 * l'interpreteur DI ne l'enveloppe pas dans une Phrase, il arrive au gabarit
 * en chaine brute et aucun CSV ne peut le traduire. On l'enveloppe ici, sans
 * imposer de langue : la traduction vient du pack de langue du site.
 *
 * Plugin sur Magento\LoginAsCustomerAdminUi\Ui\Customer\Component\Button\DataProvider::getData() ;
 * $subject non type : le module cible peut etre absent (replace Composer).
 */
final class TraduireLibelleBouton
{
    /**
     * @param array<string, mixed> $result
     * @return array<string, mixed>
     */
    public function afterGetData(object $subject, array $result): array
    {
        if (isset($result['label']) && is_string($result['label'])) {
            $result['label'] = new Phrase($result['label']);
        }

        return $result;
    }
}
