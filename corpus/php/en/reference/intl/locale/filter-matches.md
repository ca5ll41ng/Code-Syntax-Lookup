---
id: "en-php-function-locale-filtermatches"
language: "php"
lang: "en"
category: "function"
name: "Locale::filterMatches"
aliases: ["locale_filter_matches"]
title: "Checks if a language tag filter matches with locale"
signature: "public static bool|null Locale::filterMatches(string $languageTag, string $locale, bool $canonicalize = false)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.filtermatches.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a language tag filter matches with locale

## Description

Object-oriented style

```php
public static bool|null Locale::filterMatches(string $languageTag, string $locale, bool $canonicalize = false)
```

Procedural style

```php
bool|null locale_filter_matches(string $languageTag, string $locale, bool $canonicalize = false)
```

Checks if a `$languageTag` filter matches with `$locale` according to RFC 4647's basic filtering algorithm

## Parameters

- **`$languageTag`** — The language tag to check
- **`$locale`** — The language range to check against
- **`$canonicalize`** — If true, the arguments will be converted to canonical form before matching.

## Return Values

`true` if `$locale` matches `$languageTag` `false` otherwise.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_filter_matches()` example**

```php


<?php
echo (locale_filter_matches('de-DEVA','de-DE', false)) ? "Matches" : "Does not match";
echo '; ';
echo (locale_filter_matches('de-DE_1996','de-DE', false)) ? "Matches" : "Does not match";
?>

   
```

**OO example**

```php


<?php
echo (Locale::filterMatches('de-DEVA','de-DE', false)) ? "Matches" : "Does not match";
echo '; ';
echo (Locale::filterMatches('de-DE-1996','de-DE', false)) ? "Matches" : "Does not match";
?>

   
```

The above example will output:

```text


Does not match; Matches

  
```

## See Also

`locale_lookup()`
