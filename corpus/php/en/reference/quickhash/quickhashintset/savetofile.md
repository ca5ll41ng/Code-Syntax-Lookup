---
id: "en-php-function-quickhashintset-savetofile"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::saveToFile"
title: "This method stores an in-memory set to disk"
signature: "public void QuickHashIntSet::saveToFile(string $filename)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.savetofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method stores an in-memory set to disk

## Description

```php
public void QuickHashIntSet::saveToFile(string $filename)
```

This method stores an existing set to a file on disk, in the same format that `QuickHashIntSet::loadFromFile()` can read.

## Parameters

- **`$filename`** — The filename of the file to store the hash in.

## Return Values

No value is returned.

## Examples

**`QuickHashIntSet::saveToFile()` example**

```php


<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

$set->saveToFile( '/tmp/test.set' );
?>

   
```
