---
id: "en-php-function-locale-getallvariants"
language: "php"
lang: "en"
category: "function"
name: "Locale::getAllVariants"
aliases: ["locale_get_all_variants"]
title: "Gets the variants for the input locale"
signature: "public static array|null Locale::getAllVariants(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getallvariants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the variants for the input locale

## Description

Object-oriented style

```php
public static array|null Locale::getAllVariants(string $locale)
```

Procedural style

```php
array|null locale_get_all_variants(string $locale)
```

Gets the variants for the input locale

## Parameters

- **`$locale`** — The locale to extract the variants from

## Return Values

The `array` containing the list of all variants subtag for the locale or `null` if not present

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_get_all_variants()` example**

```php


<?php
$arr = locale_get_all_variants('sl_IT_NEDIS_ROJAZ_1901');
var_export( $arr );
?>

   
```

**OO example**

```php


<?php
 $arr = Locale::getAllVariants('sl_IT_NEDIS_ROJAZ_1901');
 var_export( $arr );
?>

   
```

The above example will output:

```text


array (
    0 => 'NEDIS',
    1 => 'ROJAZ',
    2 => '1901',
)

  
```

## See Also

`locale_get_primary_language()` `locale_get_script()` `locale_get_region()`
