---
id: "en-php-function-quickhashintset-loadfromfile"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntSet::loadFromFile"
title: "This factory method creates a set from a file"
signature: "public static QuickHashIntSet QuickHashIntSet::loadFromFile(string $filename, [int $size = ...], [int $options = ...])"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintset.loadfromfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This factory method creates a set from a file

## Description

```php
public static QuickHashIntSet QuickHashIntSet::loadFromFile(string $filename, [int $size = ...], [int $options = ...])
```

This factory method creates a new set from a definition file on disk. The file format consists of 32 bit signed integers packed together in the Endianness that the system that the code runs on uses.

## Parameters

- **`$filename`** — The filename of the file to read the set from.
- **`$size`** — The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from `4` to `4194304`.
- **`$options`** — The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the set, rounded up to the nearest power of two with a maximum limit of `4194304`.

## Return Values

Returns a new `QuickHashIntSet`.

## Examples

**`QuickHashIntSet::loadFromFile()` example**

```php


<?php
$file = dirname( __FILE__ ) . "/simple.set";
$set = QuickHashIntSet::loadFromFile(
    $file,
    QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    printf( "Key %3d (%2x) is %s\n",
        $key, $key,
        $set->exists( $key ) ? 'set' : 'unset'
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
