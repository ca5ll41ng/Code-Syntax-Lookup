---
id: "en-php-function-quickhashinthash-getsize"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::getSize"
title: "Returns the number of elements in the hash"
signature: "public int QuickHashIntHash::getSize()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of elements in the hash

## Description

```php
public int QuickHashIntHash::getSize()
```

Returns the number of elements in the hash.

## Parameters

This function has no parameters.

## Return Values

The number of elements in the hash.

## Examples

**`QuickHashIntHash::getSize()` example**

```php


<?php
$hash = new QuickHashIntHash( 8 );
var_dump( $hash->add( 2 ) );
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
