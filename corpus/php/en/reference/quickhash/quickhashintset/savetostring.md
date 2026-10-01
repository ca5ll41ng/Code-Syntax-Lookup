---
id: "en-php-function-quickhashintset-savetostring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::saveToString"
title: "This method returns a serialized version of the set"
signature: "public string QuickHashIntSet::saveToString()"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.savetostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method returns a serialized version of the set

## Description

```php
public string QuickHashIntSet::saveToString()
```

This method returns a serialized version of the set in the same format that `QuickHashIntSet::loadFromString()` can read.

## Parameters

This function has no parameters.

## Return Values

This method returns a string containing a serialized format of the set. Each element is stored as a four byte value in the Endianness that the current system uses.

## Examples

**`QuickHashIntSet::saveToString()` example**

```php


<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

var_dump( $set->saveToString() );
?>

   
```
