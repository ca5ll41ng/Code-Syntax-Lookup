---
id: "en-php-function-quickhashstringinthash-getsize"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::getSize"
title: "Returns the number of elements in the hash"
signature: "public int QuickHashStringIntHash::getSize()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of elements in the hash

## Description

```php
public int QuickHashStringIntHash::getSize()
```

Returns the number of elements in the hash.

## Parameters

This function has no parameters.

## Return Values

The number of elements in the hash.

## Examples

**`QuickHashStringIntHash::getSize()` example**

```php


<?php
$hash = new QuickHashStringIntHash( 8 );
var_dump( $hash->add( "two", 2 ) );
var_dump( $hash->add( "three", 5 ) );
var_dump( $hash->getSize() );
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
int(2)

   
```
