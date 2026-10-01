---
id: "en-php-function-quickhashstringinthash-loadfromstring"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::loadFromString"
title: "This factory method creates a hash from a string"
signature: "public static QuickHashStringIntHash QuickHashStringIntHash::loadFromString(string $contents, int $size = 0, int $options = 0)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.loadfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This factory method creates a hash from a string

## Description

```php
public static QuickHashStringIntHash QuickHashStringIntHash::loadFromString(string $contents, int $size = 0, int $options = 0)
```

This factory method creates a new hash from a definition in a string. The format is the same as the one used in "loadFromFile".

## Parameters

- **`$contents`** — The string containing a serialized format of the hash.
- **`$size`** — The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 4 to 4194304.
- **`$options`** — The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the hash, rounded up to the nearest power of two with a maximum limit of 4194304.

## Return Values

Returns a new QuickHashStringIntHash.

## Examples

**`QuickHashStringIntHash::loadFromString()` example**

```php


<?php
$contents = file_get_contents( dirname( __FILE__ ) . "/simple.hash.string" );
$hash = QuickHashStringIntHash::loadFromString(
    $contents,
    QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    $i = 48712 + $key * 1631;
    $k = base_convert( $i, 10, 36 );
    echo $k, ' => ', $hash->get( $k ), "\n";
}
?>

   
```

The above example will output something similar to:

```text


11l4 => 48712
12uf => 50343
143q => 51974
15d1 => 53605
16mc => 55236
17vn => 56867
194y => 58498
1ae9 => 60129
1bnk => 61760
1cwv => 63391
1e66 => 65022
1ffh => 66653
1gos => 68284
1hy3 => 69915
1j7e => 71546
1kgp => 73177

   
```
