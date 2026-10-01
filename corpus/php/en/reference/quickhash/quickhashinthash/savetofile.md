---
id: "en-php-function-quickhashinthash-savetofile"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::saveToFile"
title: "This method stores an in-memory hash to disk"
signature: "public void QuickHashIntHash::saveToFile(string $filename)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.savetofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method stores an in-memory hash to disk

## Description

```php
public void QuickHashIntHash::saveToFile(string $filename)
```

This method stores an existing hash to a file on disk, in the same format that `QuickHashIntHash::loadFromFile()` can read.

## Parameters

- **`$filename`** — The filename of the file to store the hash in.

## Return Values

No value is returned.

## Examples

**`QuickHashIntHash::saveToFile()` example**

```php


<?php
$hash = new QuickHashIntHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 43 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 52 ) );

$hash->saveToFile( '/tmp/test.hash' );
?>

   
```
