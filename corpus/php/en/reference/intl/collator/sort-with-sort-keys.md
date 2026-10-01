---
id: "en-php-function-collator-sortwithsortkeys"
language: "php"
lang: "en"
category: "function"
name: "Collator::sortWithSortKeys"
aliases: ["collator_sort_with_sort_keys"]
title: "Sort array using specified collator and sort keys"
signature: "public bool Collator::sortWithSortKeys(array $array)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.sortwithsortkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort array using specified collator and sort keys

## Description

Object-oriented style

```php
public bool Collator::sortWithSortKeys(array $array)
```

Procedural style

```php
bool collator_sort_with_sort_keys(Collator $object, array $array)
```

Similar to `collator_sort()` but uses ICU sorting keys produced by ucol_getSortKey() to gain more speed on large arrays.

## Parameters

- **`$object`** — `Collator` object.
- **`$array`** — Array of strings to sort

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`collator_sort_with_sort_keys()` example**

```php


<?php
$arr  = array( 'Köpfe', 'Kypper', 'Kopfe' );
$coll = collator_create( 'sv' );

collator_sort_with_sort_keys( $coll, $arr );
var_export( $arr );
?>

    
```

The above example will output:

```text


array (
  0 => 'Kopfe',
  1 => 'Kypper',
  2 => 'Köpfe',
)

    
```

## See Also

Collator constants `collator_sort()` `collator_asort()`
