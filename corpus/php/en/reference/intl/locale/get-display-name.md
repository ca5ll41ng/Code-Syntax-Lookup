---
id: "en-php-function-locale-getdisplayname"
language: "php"
lang: "en"
category: "function"
name: "Locale::getDisplayName"
aliases: ["locale_get_display_name"]
title: "Returns an appropriately localized display name for the input locale"
signature: "public static string|false Locale::getDisplayName(string $locale, string|null $displayLocale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getdisplayname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an appropriately localized display name for the input locale

## Description

Object-oriented style

```php
public static string|false Locale::getDisplayName(string $locale, string|null $displayLocale = null)
```

Procedural style

```php
string|false locale_get_display_name(string $locale, string|null $displayLocale = null)
```

Returns an appropriately localized display name for the input locale. If `$locale` is `null` then the default locale is used.

## Parameters

- **`$locale`** — The locale to return a display name for.
- **`$displayLocale`** — optional format locale

## Return Values

Display name of the locale in the format appropriate for `$displayLocale`, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$displayLocale` is nullable now. |

## Examples

**`locale_get_display_name()` example**

```php


<?php
echo locale_get_display_name('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo locale_get_display_name('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo locale_get_display_name('sl-Latn-IT-nedis', 'de');
?>

   
```

**OO example**

```php


<?php
echo Locale::getDisplayName('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo Locale::getDisplayName('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo Locale::getDisplayName('sl-Latn-IT-nedis', 'de');
?>

   
```

The above example will output:

```text


Slovenian (Latin, Italy, Natisone dialect);
slov\xc3\xa8ne (latin, Italie, dialecte de Natisone;
Slowenisch (Lateinisch, Italien, NEDIS)
  
   
```

## See Also

`locale_get_display_language()` `locale_get_display_script()` `locale_get_display_region()` `locale_get_display_variant()`
