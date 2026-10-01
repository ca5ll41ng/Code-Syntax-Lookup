---
id: "en-php-function-locale-minimizesubtags"
language: "php"
lang: "en"
category: "function"
name: "Locale::minimizeSubtags"
aliases: ["locale_minimize_subtags"]
title: "Remove likely subtags from a locale"
signature: "public static string|false Locale::minimizeSubtags(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.minimizesubtags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove likely subtags from a locale

## Description

Object-oriented style

```php
public static string|false Locale::minimizeSubtags(string $locale)
```

Procedural style

```php
string|false locale_minimize_subtags(string $locale)
```

Minimizes a locale tag by removing subtags that can be inferred using the ICU likely subtag data. For example, `en_Latn_US` becomes `en`.

## Parameters

- **`$locale`** — The locale to minimize.

## Return Values

Returns the locale with likely subtags removed, or `false` on failure.

## Errors/Exceptions

Throws a ValueError when the `$locale` argument contains null bytes.

## See Also

 `Locale::addLikelySubtags()` `Locale::canonicalize()`
