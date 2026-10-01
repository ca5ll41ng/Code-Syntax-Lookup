---
id: "en-php-function-locale-getprimarylanguage"
language: "php"
lang: "en"
category: "function"
name: "Locale::getPrimaryLanguage"
aliases: ["locale_get_primary_language"]
title: "Gets the primary language for the input locale"
signature: "public static string|null Locale::getPrimaryLanguage(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getprimarylanguage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the primary language for the input locale

## Description

Object-oriented style

```php
public static string|null Locale::getPrimaryLanguage(string $locale)
```

Procedural style

```php
string|null locale_get_primary_language(string $locale)
```

Gets the primary language for the input locale

## Parameters

- **`$locale`** — The locale to extract the primary language code from

## Return Values

The language code associated with the language.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_get_primary_language()` example**

```php


<?php
echo locale_get_primary_language('zh-Hant');
?>

   
```

**OO example**

```php


<?php
echo Locale::getPrimaryLanguage('zh-Hant');
?>

   
```

The above example will output:

```text


zh

  
```

## See Also

`locale_get_script()` `locale_get_region()` `locale_get_all_variants()`
