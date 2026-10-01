---
id: "en-php-function-numberformatter-getlocale"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getLocale"
aliases: ["numfmt_get_locale"]
title: "Get formatter locale"
signature: "public string|false NumberFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.getlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get formatter locale

## Description

Object-oriented style

```php
public string|false NumberFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE)
```

Procedural style

```php
string|false numfmt_get_locale(NumberFormatter $formatter, int $type = ULOC_ACTUAL_LOCALE)
```

Get formatter locale name.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$type`** — You can choose between valid and actual locale ( `Locale::VALID_LOCALE`, `Locale::ACTUAL_LOCALE`, respectively). The default is the actual locale.

## Return Values

The locale name used to create the formatter, or `false` on failure.

## Examples

**`numfmt_get_locale()` example**

```php


<?php
$req     = 'fr_FR_PARIS';
$fmt     = numfmt_create( $req,  NumberFormatter::DECIMAL);
$res_val = numfmt_get_locale( $fmt, Locale::VALID_LOCALE );
$res_act = numfmt_get_locale( $fmt, Locale::ACTUAL_LOCALE );
printf( "Requested locale name: %s\nValid locale name: %s\nActual locale name: %s\n",
         $req, $res_val, $res_act );
?>

   
```

The above example will output:

```text


Requested locale name: fr_FR_PARIS
Valid locale name: fr_FR
Actual locale name: fr

   
```

## See Also

`numfmt_create()` `numfmt_get_error_code()`
