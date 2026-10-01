---
id: "en-php-function-quickhashintstringhash-getsize"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::getSize"
title: "Returns the number of elements in the hash"
signature: "public int QuickHashIntStringHash::getSize()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of elements in the hash

## Description

```php
public int QuickHashIntStringHash::getSize()
```

Returns the number of elements in the hash.

## Parameters

This function has no parameters.

## Return Values

The number of elements in the hash.

## Examples

**`QuickHashIntStringHash::getSize()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 8 );
var_dump( $hash->add( 2, "two" ) );
var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->getSize() );
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
int(2)

   
```
