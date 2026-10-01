---
id: "en-php-function-locale-getregion"
language: "php"
lang: "en"
category: "function"
name: "Locale::getRegion"
aliases: ["locale_get_region"]
title: "Gets the region for the input locale"
signature: "public static string|null Locale::getRegion(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getregion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the region for the input locale

## Description

Object-oriented style

```php
public static string|null Locale::getRegion(string $locale)
```

Procedural style

```php
string|null locale_get_region(string $locale)
```

Gets the region for the input locale.

## Parameters

- **`$locale`** — The locale to extract the region code from

## Return Values

The region subtag for the locale or `null` if not present

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_get_region()` example**

```php


<?php
echo locale_get_region('de-CH-1901');
?>

   
```

**OO example**

```php


<?php
echo Locale::getRegion('de-CH-1901');
?>

   
```

The above example will output:

```text


CH

  
```

## See Also

`locale_get_primary_language()` `locale_get_script()` `locale_get_all_variants()`
