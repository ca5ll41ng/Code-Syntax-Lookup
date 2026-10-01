---
id: "en-php-function-quickhashintstringhash-get"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::get"
title: "This method retrieves a value from the hash by its key"
signature: "public mixed QuickHashIntStringHash::get(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method retrieves a value from the hash by its key

## Description

```php
public mixed QuickHashIntStringHash::get(int $key)
```

This method retrieves a value from the hash by its key.

## Parameters

- **`$key`** — The key of the entry to retrieve.

## Return Values

The value if the key exists, or `null` if the key wasn't part of the hash.

## Examples

**`QuickHashIntStringHash::get()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 8 );
var_dump( $hash->get( 1 ) );

var_dump( $hash->add( 2, "two" ) );
var_dump( $hash->get( 2 ) );

var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->get( 3 ) );
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)
string(3) "two"
bool(true)
string(1) "5"

   
```
