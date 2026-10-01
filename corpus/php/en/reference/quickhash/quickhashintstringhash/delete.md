---
id: "en-php-function-quickhashintstringhash-delete"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::delete"
title: "This method deletes an entry from the hash"
signature: "public bool QuickHashIntStringHash::delete(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method deletes an entry from the hash

## Description

```php
public bool QuickHashIntStringHash::delete(int $key)
```

This method deletes an entry from the hash, and returns whether the entry was deleted or not. Associated memory structures will not be freed immediately, but rather when the hash itself is freed.

Elements can not be deleted when the hash is used in an iterator. The method will not throw an exception, but simply return `false` like would happen with any other deletion failure.

## Parameters

- **`$key`** — The key of the entry to delete.

## Return Values

`true` when the entry was deleted, and `false` if the entry was not deleted.

## Examples

**`QuickHashIntStringHash::delete()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "five" ) );
var_dump( $hash->delete( 4 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->delete( 4 ) );
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
