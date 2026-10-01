---
id: "en-php-function-collator-getlocale"
language: "php"
lang: "en"
category: "function"
name: "Collator::getLocale"
aliases: ["collator_get_locale"]
title: "Get the locale name of the collator"
signature: "public string|false Collator::getLocale(int $type)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.getlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the locale name of the collator

## Description

Object-oriented style

```php
public string|false Collator::getLocale(int $type)
```

Procedural style

```php
string|false collator_get_locale(Collator $object, int $type)
```

Get collector locale name.

## Parameters

- **`$object`** — `Collator` object.
- **`$type`** — You can choose between valid and actual locale ( `Locale::VALID_LOCALE` and `Locale::ACTUAL_LOCALE`, respectively).

## Return Values

Real locale name from which the collation data comes. If the collator was instantiated from rules or an error occurred, returns `false`.

## Examples

**`collator_get_locale()` example**

```php


<?php
$coll    = collator_create( 'en_US_California' );
$res_val = collator_get_locale( $coll, Locale::VALID_LOCALE );
$res_act = collator_get_locale( $coll, Locale::ACTUAL_LOCALE );
printf( "Valid locale name: %s\nActual locale name: %s\n",
         $res_val, $res_act );
?>

    
```

The above example will output:

```text


Requested locale name: en_US_California
Valid locale name: en_US
Actual locale name: en

    
```

## See Also

`collator_create()`
