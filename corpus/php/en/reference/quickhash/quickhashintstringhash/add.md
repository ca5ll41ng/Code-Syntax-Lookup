---
id: "en-php-function-quickhashintstringhash-add"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::add"
title: "This method adds a new entry to the hash"
signature: "public bool QuickHashIntStringHash::add(int $key, string $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method adds a new entry to the hash

## Description

```php
public bool QuickHashIntStringHash::add(int $key, string $value)
```

This method adds a new entry to the hash, and returns whether the entry was added. Entries are by default always added unless `QuickHashIntStringHash::CHECK_FOR_DUPES` has been passed when the hash was created.

## Parameters

- **`$key`** — The key of the entry to add.
- **`$value`** — The value of the entry to add. If a non-string is passed, it will be converted to a string automatically if possible.

## Return Values

`true` when the entry was added, and `false` if the entry was not added.

## Examples

**`QuickHashIntStringHash::add()` example**

```php


<?php
echo "without dupe checking\n";
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "twenty two" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "twelve" ) );

echo "\nwith dupe checking\n";
$hash = new QuickHashIntStringHash( 1024, QuickHashIntStringHash::CHECK_FOR_DUPES );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "seventy eight" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "nine" ) );
?>

   
```

The above example will output something similar to:

```text


without dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
string(10) "twenty two"
bool(true)

with dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
string(13) "seventy eight"
bool(false)

   
```
