---
id: "en-php-function-quickhashintstringhash-savetostring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::saveToString"
title: "This method returns a serialized version of the hash"
signature: "public string QuickHashIntStringHash::saveToString()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.savetostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method returns a serialized version of the hash

## Description

```php
public string QuickHashIntStringHash::saveToString()
```

This method returns a serialized version of the hash in the same format that `QuickHashIntStringHash::loadFromString()` can read.

## Parameters

This function has no parameters.

## Return Values

This method returns a string containing a serialized format of the hash. Each element is stored as a four byte value in the Endianness that the current system uses.

## Examples

**`QuickHashIntStringHash::saveToString()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "thirty four" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 5, "fifty five" ) );

var_dump( $hash->saveToString() );
?>

   
```
