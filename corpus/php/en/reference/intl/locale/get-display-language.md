---
id: "en-php-function-locale-getdisplaylanguage"
language: "php"
lang: "en"
category: "function"
name: "Locale::getDisplayLanguage"
aliases: ["locale_get_display_language"]
title: "Returns an appropriately localized display name for language of the inputlocale"
signature: "public static string|false Locale::getDisplayLanguage(string $locale, string|null $displayLocale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getdisplaylanguage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an appropriately localized display name for language of the inputlocale

## Description

Object-oriented style

```php
public static string|false Locale::getDisplayLanguage(string $locale, string|null $displayLocale = null)
```

Procedural style

```php
string|false locale_get_display_language(string $locale, string|null $displayLocale = null)
```

Returns an appropriately localized display name for language of the input locale. If is `null` then the default locale is used.

## Parameters

- **`$locale`** — The locale to return a display language for
- **`$displayLocale`** — Optional format locale to use to display the language name

## Return Values

Display name of the language for the `$locale` in the format appropriate for `$displayLocale`, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$displayLocale` is nullable now. |

## Examples

**`locale_get_display_language()` example**

```php


<?php
echo locale_get_display_language('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo locale_get_display_language('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo locale_get_display_language('sl-Latn-IT-nedis', 'de');
?>

   
```

**OO example**

```php


<?php
echo Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'de');
?>

   
```

The above example will output:

```text


Slovenian;
slov\xc3\xa8ne;
Slowenisch

  
```

## See Also

`locale_get_display_name()` `locale_get_display_script()` `locale_get_display_region()` `locale_get_display_variant()`
