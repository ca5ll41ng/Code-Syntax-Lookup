---
id: "en-php-function-quickhashinthash-loadfromstring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::loadFromString"
title: "This factory method creates a hash from a string"
signature: "public static QuickHashIntHash QuickHashIntHash::loadFromString(string $contents, [int $options = ...])"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.loadfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This factory method creates a hash from a string

## Description

```php
public static QuickHashIntHash QuickHashIntHash::loadFromString(string $contents, [int $options = ...])
```

This factory method creates a new hash from a definition in a string. The file format consists of 32 bit signed integers packed together in the Endianness that the system that the code runs on uses. For each element there are two 32 bit signed integers stored. The first of each element is the key, and the second is the value belonging to the key.

## Parameters

- **`$contents`** — The string containing a serialized format of the hash.
- **`$options`** — The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the hash, rounded up to the nearest power of two with a maximum limit of `4194304`.

## Return Values

Returns a new `QuickHashIntHash`.

## Examples

**`QuickHashIntHash::loadFromString()` example**

```php


<?php
$contents = file_get_contents( dirname( __FILE__ ) . "/simple.hash" );
$hash = QuickHashIntHash::loadFromString(
    $contents,
    QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    printf( "Key %3d (%2x) is %s\n",
        $key, $key,
        $hash->exists( $key ) ? 'set' : 'unset'
    );
}
?>

   
```

The above example will output something similar to:

```text


Key   0 ( 0) is unset
Key   1 ( 1) is set
Key   2 ( 2) is set
Key   3 ( 3) is set
Key   4 ( 4) is unset
Key   5 ( 5) is set
Key   6 ( 6) is unset
Key   7 ( 7) is set
Key   8 ( 8) is unset
Key   9 ( 9) is unset
Key  10 ( a) is unset
Key  11 ( b) is set
Key  12 ( c) is unset
Key  13 ( d) is set
Key  14 ( e) is unset
Key  15 ( f) is unset

   
```
