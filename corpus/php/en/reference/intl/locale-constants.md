---
id: "en-php-guide-intl-locale-constants"
language: "php"
lang: "en"
category: "guide"
name: "intl.locale-constants"
title: "Predefined Constants"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.locale-constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

- **`Locale::DEFAULT_LOCALE` `null`** — Used as locale parameter with the methods of the various locale affected classes, such as NumberFormatter. This constant would make the methods to use default locale.

These constants describe the choice of the locale for the getLocale method of different classes.

- **`Locale::ACTUAL_LOCALE` `int`** — This is locale the data actually comes from.
- **`Locale::VALID_LOCALE` `int`** — This is the most specific locale supported by ICU.

## Locale Subtags

These constants define how the Locales are parsed or composed. They should be used as keys in the argument array to `locale_compose()` and are returned from `locale_parse()` as keys of the returned associative `array`.

- **`Locale::LANG_TAG` `string`** — Language subtag
- **`Locale::EXTLANG_TAG` `string`** — Extended language subtag
- **`Locale::SCRIPT_TAG` `string`** — Script subtag
- **`Locale::REGION_TAG` `string`** — Region subtag
- **`Locale::VARIANT_TAG` `string`** — Variant subtag
- **`Locale::GRANDFATHERED_LANG_TAG` `string`** — Grandfathered Language subtag
- **`Locale::PRIVATE_TAG` `string`** — Private subtag
