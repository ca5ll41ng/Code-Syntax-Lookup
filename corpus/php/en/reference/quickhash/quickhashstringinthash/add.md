---
id: "en-php-function-quickhashstringinthash-add"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::add"
title: "This method adds a new entry to the hash"
signature: "public bool QuickHashStringIntHash::add(string $key, int $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method adds a new entry to the hash

## Description

```php
public bool QuickHashStringIntHash::add(string $key, int $value)
```

This method adds a new entry to the hash, and returns whether the entry was added. Entries are by default always added unless `QuickHashStringIntHash::CHECK_FOR_DUPES` has been passed when the hash was created.

## Parameters

- **`$key`** — The key of the entry to add.
- **`$value`** — The value of the entry to add.

## Return Values

`true` when the entry was added, and `false` if the entry was not added.

## Examples

**`QuickHashStringIntHash::add()` example**

```php


<?php
echo "without dupe checking\n";
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 22 ) );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 12 ) );

echo "\nwith dupe checking\n";
$hash = new QuickHashStringIntHash( 1024, QuickHashStringIntHash::CHECK_FOR_DUPES );
var_dump( $hash );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 78 ) );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 9 ) );
?>

   
```

The above example will output something similar to:

```text


without dupe checking
object(QuickHashStringIntHash)#1 (0) {
}
bool(false)
bool(false)
bool(true)
bool(true)
int(22)
bool(true)

with dupe checking
object(QuickHashStringIntHash)#2 (0) {
}
bool(false)
bool(false)
bool(true)
bool(true)
int(78)
bool(false)

   
```
