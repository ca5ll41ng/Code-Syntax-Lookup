---
id: "en-php-function-quickhashstringinthash-get"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::get"
title: "This method retrieves a value from the hash by its key"
signature: "public mixed QuickHashStringIntHash::get(string $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method retrieves a value from the hash by its key

## Description

```php
public mixed QuickHashStringIntHash::get(string $key)
```

This method retrieves a value from the hash by its key.

## Parameters

- **`$key`** — The key of the entry to retrieve.

## Return Values

The value if the key exists, or `null` if the key wasn't part of the hash.

## Examples

**`QuickHashStringIntHash::get()` example**

```php


<?php
$hash = new QuickHashStringIntHash( 8 );
var_dump( $hash->get( "one" ) );

var_dump( $hash->add( "two", 2 ) );
var_dump( $hash->get( "two" ) );
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)
int(2)

   
```
