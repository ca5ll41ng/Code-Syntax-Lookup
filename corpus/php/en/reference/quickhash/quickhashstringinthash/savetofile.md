---
id: "en-php-function-quickhashstringinthash-savetofile"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::saveToFile"
title: "This method stores an in-memory hash to disk"
signature: "public void QuickHashStringIntHash::saveToFile(string $filename)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.savetofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method stores an in-memory hash to disk

## Description

```php
public void QuickHashStringIntHash::saveToFile(string $filename)
```

This method stores an existing hash to a file on disk, in the same format that loadFromFile() can read.

## Parameters

- **`$filename`** — The filename of the file to store the hash in.

## Return Values

No value is returned.

## Examples

**`QuickHashStringIntHash::saveToFile()` example**

```php


<?php
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash->add( "forty three", 42 ) );
var_dump( $hash->add( "fifty two", 52 ) );

$hash->saveToFile( '/tmp/test.hash.string' );
?>

   
```
