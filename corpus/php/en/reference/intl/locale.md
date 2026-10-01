---
id: "en-php-guide-class-locale"
language: "php"
lang: "en"
category: "guide"
name: "class.locale"
title: "The Locale class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.locale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Locale class

Locale

   Introduction  A "Locale" is an identifier used to get language, culture, or regionally-specific behavior from an API. PHP locales are organized and identified the same way that the CLDR locales used by ICU (and many vendors of Unix-like operating systems, the Mac, Java, and so forth) use. Locales are identified using RFC 4646 language tags (which use hyphen, not underscore) in addition to the more traditional underscore-using identifiers. Unless otherwise noted the functions in this class are tolerant of both formats.    Examples of identifiers include:  en-US (English, United States) zh-Hant-TW (Chinese, Traditional Script, Taiwan) fr-CA, fr-FR (French for Canada and France respectively)     The Locale class (and related procedural functions) are used to interact with locale identifiers--to verify that an ID is well-formed, valid, etc. The extensions used by CLDR in UAX #35 (and inherited by ICU) are valid and used wherever they would be in ICU normally.    Locales cannot be instantiated as objects. All of the functions/methods provided are static. Use `Locale::getDefault()` and `Locale::setDefault()` to read and write the default locale used by ICU.    The null or empty string obtains the "root" locale. The "root" locale is equivalent to "en_US_POSIX" in CLDR. Language tags (and thus locale identifiers) are case insensitive. There exists a canonicalization function to make case match the specification.      Class Synopsis    `Locale`    `public` `const` `int` `Locale::ACTUAL_LOCALE`   `public` `const` `int` `Locale::VALID_LOCALE`   `public` `const` `null` `Locale::DEFAULT_LOCALE` null   `public` `const` `string` `Locale::LANG_TAG`   `public` `const` `string` `Locale::EXTLANG_TAG`   `public` `const` `string` `Locale::SCRIPT_TAG`   `public` `const` `string` `Locale::REGION_TAG`   `public` `const` `string` `Locale::VARIANT_TAG`   `public` `const` `string` `Locale::GRANDFATHERED_LANG_TAG`   `public` `const` `string` `Locale::PRIVATE_TAG`          See Also    [RFC 4646 - Tags for Identifying Languages](4646)   [RFC 4647 - Matching of Language Tags](4647)   [Unicode CLDR Project:Common Locale Data Repository]()   [IANA Language Subtags Registry]()   [ICU User Guide - Locale]()   [ICU Locale api]()       Changelog 
|  |  |
| --- | --- |
| 8.5.0 | `Locale` methods now throw a ValueError when a locale argument contains null bytes. |
| 8.4.0 | The class constants are now typed. |
