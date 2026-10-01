---
id: "en-php-function-quickhashstringinthash-savetostring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::saveToString"
title: "This method returns a serialized version of the hash"
signature: "public string QuickHashStringIntHash::saveToString()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.savetostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method returns a serialized version of the hash

## Description

```php
public string QuickHashStringIntHash::saveToString()
```

This method returns a serialized version of the hash in the same format that `QuickHashStringIntHash::loadFromString()` can read.

## Parameters

This function has no parameters.

## Return Values

This method returns a serialized format of an existing hash, in the same format that `QuickHashStringIntHash::loadFromString()` can read.

## Examples

**`QuickHashStringIntHash::saveToString()` example**

```php


<?php
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash->add( "forty three", 42 ) );
var_dump( $hash->add( "fifty two", 52 ) );

var_dump( $hash->saveToString() );
?>

   
```
