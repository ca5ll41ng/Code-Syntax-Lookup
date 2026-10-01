---
id: "en-php-function-quickhashintstringhash-savetofile"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::saveToFile"
title: "This method stores an in-memory hash to disk"
signature: "public void QuickHashIntStringHash::saveToFile(string $filename)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.savetofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method stores an in-memory hash to disk

## Description

```php
public void QuickHashIntStringHash::saveToFile(string $filename)
```

This method stores an existing hash to a file on disk, in the same format that loadFromFile() can read.

## Parameters

- **`$filename`** — The filename of the file to store the hash in.

## Return Values

No value is returned.

## Examples

**`QuickHashIntStringHash::saveToFile()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "forty three" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "fifty two" ) );

$hash->saveToFile( '/tmp/test.string.hash' );
?>

   
```
