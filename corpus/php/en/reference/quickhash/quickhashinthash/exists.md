---
id: "en-php-function-quickhashinthash-exists"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::exists"
title: "This method checks whether a key is part of the hash"
signature: "public bool QuickHashIntHash::exists(int $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method checks whether a key is part of the hash

## Description

```php
public bool QuickHashIntHash::exists(int $key)
```

This method checks whether an entry with the provided key exists in the hash.

## Parameters

- **`$key`** — The key of the entry to check for whether it exists in the hash.

## Return Values

Returns `true` when the entry was found, or `false` when the entry is not found.

## Examples

**`QuickHashIntHash::exists()` example**

```php


<?php
//generate 200000 elements
$array = range( 0, 199999 );
$existingEntries = array_rand( array_flip( $array ), 180000 );
$testForEntries = array_rand( array_flip( $array ), 1000 );
$foundCount = 0;

echo "Creating hash: ", microtime( true ), "\n";
$hash = new QuickHashIntHash( 100000 );
echo "Adding elements: ", microtime( true ), "\n";
foreach( $existingEntries as $key )
{
     $hash->add( $key, 56 );
}

echo "Doing 1000 tests: ", microtime( true ), "\n";
foreach( $testForEntries as $key )
{
     $foundCount += $hash->exists( $key );
}
echo "Done, $foundCount found: ", microtime( true ), "\n";
?>

   
```

The above example will output something similar to:

```text


Creating hash: 1263588703.0748
Adding elements: 1263588703.0757
Doing 1000 tests: 1263588703.7851
Done, 898 found: 1263588703.7897

   
```
