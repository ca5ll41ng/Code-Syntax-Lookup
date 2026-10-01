---
id: "en-php-function-locale-canonicalize"
language: "php"
lang: "en"
category: "function"
name: "Locale::canonicalize"
aliases: ["locale_canonicalize"]
title: "Canonicalize the locale string"
signature: "public static string|null Locale::canonicalize(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.canonicalize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Canonicalize the locale string

## Description

```php
public static string|null Locale::canonicalize(string $locale)
```

Canonicalizes the passed locale string to ICU format.

This does not necessarily indicate or return a valid locale. It is only a version of the input that has been canonicalized according to ICU rules.

The behavior of this function depends on the version of ICU PHP is using (`INTL_ICU_VERSION`).

## Parameters

- **`$locale`** — Original locale string.

## Return Values

Canonicalized locale string.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_canonicalize()` example**

```php


echo Locale::canonicalize('en-US.utf8') . "\n";
echo Locale::canonicalize('totally-not-valid') . "\n";

   
```

The above example will output something similar to:

```text


en_US
totally_NOT_VALID

  
```
