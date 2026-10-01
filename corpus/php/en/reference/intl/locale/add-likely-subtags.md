---
id: "en-php-function-locale-addlikelysubtags"
language: "php"
lang: "en"
category: "function"
name: "Locale::addLikelySubtags"
aliases: ["locale_add_likely_subtags"]
title: "Add likely subtags to a locale"
signature: "public static string|false Locale::addLikelySubtags(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.addlikelysubtags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add likely subtags to a locale

## Description

Object-oriented style

```php
public static string|false Locale::addLikelySubtags(string $locale)
```

Procedural style

```php
string|false locale_add_likely_subtags(string $locale)
```

Expands a locale tag by adding likely subtags based on the ICU locale data. For example, `en` becomes `en_Latn_US`.

## Parameters

- **`$locale`** — The locale to expand.

## Return Values

Returns the locale with likely subtags added, or `false` on failure.

## Errors/Exceptions

Throws a ValueError when the `$locale` argument contains null bytes.

## See Also

 `Locale::minimizeSubtags()` `Locale::canonicalize()`
