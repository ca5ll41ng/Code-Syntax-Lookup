---
id: "en-php-function-collator-asort"
language: "php"
lang: "en"
category: "function"
name: "Collator::asort"
aliases: ["collator_asort"]
title: "Sort array maintaining index association"
signature: "public bool Collator::asort(array $array, int $flags = Collator::SORT_REGULAR)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.asort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort array maintaining index association

## Description

Object-oriented style

```php
public bool Collator::asort(array $array, int $flags = Collator::SORT_REGULAR)
```

Procedural style

```php
bool collator_asort(Collator $object, array $array, int $flags = Collator::SORT_REGULAR)
```

This function sorts an array such that array indices maintain their correlation with the array elements they are associated with. This is used mainly when sorting associative arrays where the actual element order is significant. Array elements will have sort order according to current locale rules.

Equivalent to standard PHP `asort()`.

## Parameters

- **`$object`** — `Collator` object.
- **`$array`** — Array of strings to sort.
- **`$flags`** — Optional sorting type, one of the following: - `Collator::SORT_REGULAR` - compare items normally (don't change types) - `Collator::SORT_NUMERIC` - compare items numerically - `Collator::SORT_STRING` - compare items as strings — Default `$flags` value is `Collator::SORT_REGULAR`. It is also used if an invalid `$flags` value has been specified.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`collator_asort()` example**

```php


<?php
$coll = collator_create( 'en_US' );
$arr = array(
     'a' => '100',
     'b' => '50',
     'c' => '7'
);
collator_asort( $coll, $arr, Collator::SORT_NUMERIC );
var_export( $arr );

collator_asort( $coll, $arr, Collator::SORT_STRING );
var_export( $arr );
?>

    
```

The above example will output:

```text


array (
  'c' => '7',
  'b' => '50',
  'a' => '100',
)array (
  'a' => '100',
  'b' => '50',
  'c' => '7',
)

    
```

## See Also

Collator constants `collator_sort()` `collator_sort_with_sort_keys()`
