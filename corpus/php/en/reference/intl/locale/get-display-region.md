---
id: "en-php-function-locale-getdisplayregion"
language: "php"
lang: "en"
category: "function"
name: "Locale::getDisplayRegion"
aliases: ["locale_get_display_region"]
title: "Returns an appropriately localized display name for region of the input locale"
signature: "public static string|false Locale::getDisplayRegion(string $locale, string|null $displayLocale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getdisplayregion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an appropriately localized display name for region of the input locale

## Description

Object-oriented style

```php
public static string|false Locale::getDisplayRegion(string $locale, string|null $displayLocale = null)
```

Procedural style

```php
string|false locale_get_display_region(string $locale, string|null $displayLocale = null)
```

Returns an appropriately localized display name for region of the input locale. If is `null` then the default locale is used.

## Parameters

- **`$locale`** — The locale to return a display region for.
- **`$displayLocale`** — Optional format locale to use to display the region name

## Return Values

Display name of the region for the `$locale` in the format appropriate for `$displayLocale`, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$displayLocale` is nullable now. |

## Examples

**`locale_get_display_region()` example**

```php


<?php
echo locale_get_display_region('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo locale_get_display_region('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo locale_get_display_region('sl-Latn-IT-nedis', 'de');
?>

   
```

**OO example**

```php


<?php
echo Locale::getDisplayRegion('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo Locale::getDisplayRegion('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo Locale::getDisplayRegion('sl-Latn-IT-nedis', 'de');
?>

   
```

The above example will output:

```text


Italy;
Italie;
Italien

  
```

## See Also

`locale_get_display_name()` `locale_get_display_language()` `locale_get_display_script()` `locale_get_display_variant()`
