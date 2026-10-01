---
id: "en-php-function-collator-sort"
language: "php"
lang: "en"
category: "function"
name: "Collator::sort"
aliases: ["collator_sort"]
title: "Sort array using specified collator"
signature: "public bool Collator::sort(array $array, int $flags = Collator::SORT_REGULAR)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort array using specified collator

## Description

Object-oriented style

```php
public bool Collator::sort(array $array, int $flags = Collator::SORT_REGULAR)
```

Procedural style

```php
bool collator_sort(Collator $object, array $array, int $flags = Collator::SORT_REGULAR)
```

This function sorts an array according to current locale rules.

Equivalent to standard PHP `sort()` .

## Parameters

- **`$object`** — `Collator` object.
- **`$array`** — Array of strings to sort.
- **`$flags`** — Optional sorting type, one of the following: — - `Collator::SORT_REGULAR` - compare items normally (don't change types) - `Collator::SORT_NUMERIC` - compare items numerically - `Collator::SORT_STRING` - compare items as strings Default sorting type is `Collator::SORT_REGULAR`. It is also used if an invalid `$flags` value has been specified.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`collator_sort()` example**

```php


<?php
$coll = collator_create( 'en_US' );
$arr  = array( 'at', 'às', 'as' );

var_export( $arr );
collator_sort( $coll, $arr );
var_export( $arr );
?>

    
```

The above example will output:

```text


array (
  0 => 'at',
  1 => 'às',
  2 => 'as',
)array (
  0 => 'as',
  1 => 'às',
  2 => 'at',
)

    
```

## See Also

Collator constants `collator_asort()` `collator_sort_with_sort_keys()`
