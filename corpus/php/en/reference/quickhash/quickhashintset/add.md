---
id: "en-php-function-quickhashintset-add"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::add"
title: "This method adds a new entry to the set"
signature: "public bool QuickHashIntSet::add(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method adds a new entry to the set

## Description

```php
public bool QuickHashIntSet::add(int $key)
```

This method adds a new entry to the set, and returns whether the entry was added. Entries are by default always added unless `QuickHashIntSet::CHECK_FOR_DUPES` has been passed when the set was created.

## Parameters

- **`$key`** — The key of the entry to add.

## Return Values

`true` when the entry was added, and `false` if the entry was not added.

## Examples

**`QuickHashIntSet::add()` example**

```php


<?php
echo "without dupe checking\n";
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

echo "\nwith dupe checking\n";
$set = new QuickHashIntSet( 1024, QuickHashIntSet::CHECK_FOR_DUPES );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
?>

   
```

The above example will output something similar to:

```text


without dupe checking
bool(false)
bool(true)
bool(true)
bool(true)

with dupe checking
bool(false)
bool(true)
bool(true)
bool(false)

   
```
