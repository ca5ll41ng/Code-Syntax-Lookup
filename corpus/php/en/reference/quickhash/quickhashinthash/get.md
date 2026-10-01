---
id: "en-php-function-quickhashinthash-get"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::get"
title: "This method retrieves a value from the hash by its key"
signature: "public int QuickHashIntHash::get(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method retrieves a value from the hash by its key

## Description

```php
public int QuickHashIntHash::get(int $key)
```

This method retrieves a value from the hash by its key.

## Parameters

- **`$key`** — The key of the entry to retrieve.

## Return Values

The value if the key exists, or `null` if the key wasn't part of the hash.

## Examples

**`QuickHashIntHash::get()` example**

```php


<?php
$hash = new QuickHashIntHash( 8 );
var_dump( $hash->get( 1 ) );

var_dump( $hash->add( 2 ) );
var_dump( $hash->get( 2 ) );

var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->get( 3 ) );
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)
int(1)
bool(true)
int(5)

   
```
