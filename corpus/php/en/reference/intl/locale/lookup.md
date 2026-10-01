---
id: "en-php-function-locale-lookup"
language: "php"
lang: "en"
category: "function"
name: "Locale::lookup"
aliases: ["locale_lookup"]
title: "Searches the language tag list for the best match to the language"
signature: "public static string|null Locale::lookup(array $languageTag, string $locale, bool $canonicalize = false, string|null $defaultLocale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.lookup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Searches the language tag list for the best match to the language

## Description

Object-oriented style

```php
public static string|null Locale::lookup(array $languageTag, string $locale, bool $canonicalize = false, string|null $defaultLocale = null)
```

Procedural style

```php
string|null locale_lookup(array $languageTag, string $locale, bool $canonicalize = false, string|null $defaultLocale = null)
```

Searches the items in `$languageTag` for the best match to the language range specified in `$locale` according to RFC 4647's lookup algorithm.

## Parameters

- **`$languageTag`** — An `array` containing a list of language tags to compare to `$locale`. Maximum 100 items allowed.
- **`$locale`** — The locale to use as the language range when matching.
- **`$canonicalize`** — If true, the arguments will be converted to canonical form before matching.
- **`$defaultLocale`** — The locale to use if no match is found.

## Return Values

The closest matching language tag or default value.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Changelog

|  |  |
| --- | --- |
| 7.4.0 | `$defaultLocale` is nullable now. |

## Examples

**`locale_lookup()` example**

```php


<?php
$arr = array(
    'de-DEVA',
    'de-DE-1996',
    'de',
    'de-De'
);
echo locale_lookup($arr, 'de-DE-1996-x-prv1-prv2', true, 'en_US');
?>

   
```

**OO example**

```php


<?php
$arr = array(
    'de-DEVA',
    'de-DE-1996',
    'de',
    'de-De'
);
echo Locale::lookup($arr, 'de-DE-1996-x-prv1-prv2', true, 'en_US');
?>

   
```

The above example will output:

```text


de_de_1996

  
```

## See Also

`locale_filter_matches()`
