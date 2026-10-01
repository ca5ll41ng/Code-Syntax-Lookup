---
id: "en-php-function-quickhashinthash-savetostring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::saveToString"
title: "This method returns a serialized version of the hash"
signature: "public string QuickHashIntHash::saveToString()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.savetostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method returns a serialized version of the hash

## Description

```php
public string QuickHashIntHash::saveToString()
```

This method returns a serialized version of the hash in the same format that `QuickHashIntHash::loadFromString()` can read.

## Parameters

This function has no parameters.

## Return Values

This method returns a string containing a serialized format of the hash. Each element is stored as a four byte value in the Endianness that the current system uses.

## Examples

**`QuickHashIntHash::saveToString()` example**

```php


<?php
$hash = new QuickHashIntHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 34 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 55 ) );

var_dump( $hash->saveToString() );
?>

   
```
