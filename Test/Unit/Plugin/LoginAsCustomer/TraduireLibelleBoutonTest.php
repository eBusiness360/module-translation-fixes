<?php
/**
 * maxcode/module-translation-fixes — MIT, Copyright (c) 2026 eBusiness360 – Maxime LESGUILLIER.
 */
declare(strict_types=1);

namespace Maxcode\TranslationFixes\Test\Unit\Plugin\LoginAsCustomer;

use Magento\Framework\Phrase;
use Maxcode\TranslationFixes\Plugin\LoginAsCustomer\TraduireLibelleBouton;
use PHPUnit\Framework\TestCase;

final class TraduireLibelleBoutonTest extends TestCase
{
    public function testLeLibelleDevientUnePhraseTraduisible(): void
    {
        $r = (new TraduireLibelleBouton())->afterGetData(new \stdClass(), ['label' => 'Login as Customer', 'on_click' => 'x()']);

        self::assertInstanceOf(Phrase::class, $r['label']);
        self::assertSame('Login as Customer', $r['label']->getText());
        self::assertSame('x()', $r['on_click']);
    }

    public function testSansLibelleRienNeChange(): void
    {
        self::assertSame(['on_click' => 'x()'], (new TraduireLibelleBouton())->afterGetData(new \stdClass(), ['on_click' => 'x()']));
    }

    public function testUnLibelleDejaPhraseNestPasRetouche(): void
    {
        $phrase = new Phrase('Login as Customer');
        $r = (new TraduireLibelleBouton())->afterGetData(new \stdClass(), ['label' => $phrase]);
        self::assertSame($phrase, $r['label']);
    }
}
