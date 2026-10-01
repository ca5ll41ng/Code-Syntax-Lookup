---
id: "en-php-function-quickhashintset-delete"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::delete"
title: "This method deletes an entry from the set"
signature: "public bool QuickHashIntSet::delete(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method deletes an entry from the set

## Description

```php
public bool QuickHashIntSet::delete(int $key)
```

This method deletes an entry from the set, and returns whether the entry was deleted or not. Associated memory structures will not be freed immediately, but rather when the set itself is freed.

## Parameters

- **`$key`** — The key of the entry to delete.

## Return Values

`true` when the entry was deleted, and `false` if the entry was not deleted.

## Examples

**`QuickHashIntSet::delete()` example**

```php


<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->delete( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->delete( 4 ) );
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)
bool(true)
bool(false)
bool(false)

   
```
