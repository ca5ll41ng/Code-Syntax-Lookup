---
id: "en-php-function-quickhashintstringhash-construct"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::__construct"
title: "Creates a new QuickHashIntStringHash object"
signature: "public QuickHashIntStringHash::__construct(int $size, int $options = 0)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new QuickHashIntStringHash object

## Description

```php
public QuickHashIntStringHash::__construct(int $size, int $options = 0)
```

This constructor creates a new `QuickHashIntStringHash`. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

## Parameters

- **`$size`** — The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from `64` to `4194304`.
- **`$options`** — The options that you can pass in are: `QuickHashIntStringHash::CHECK_FOR_DUPES`, which makes sure no duplicate entries are added to the hash; `QuickHashIntStringHash::DO_NOT_USE_ZEND_ALLOC` to not use PHP's internal memory manager as well as one of `QuickHashIntStringHash::HASHER_NO_HASH`, `QuickHashIntStringHash::HASHER_JENKINS1` or `QuickHashIntStringHash::HASHER_JENKINS2`. These last three configure which hashing algorithm to use. All options can be combined using bitmasks.

## Return Values

Returns a new `QuickHashIntStringHash` object.

## Examples

**`QuickHashIntStringHash::__construct()` example**

```php


<?php
var_dump( new QuickHashIntStringHash( 1024 ) );
var_dump( new QuickHashIntStringHash( 1024, QuickHashIntStringHash::CHECK_FOR_DUPES ) );
var_dump(
    new QuickHashIntStringHash(
        1024,
        QuickHashIntStringHash::DO_NOT_USE_ZEND_ALLOC | QuickHashIntStringHash::HASHER_JENKINS2
    )
);
?>

   
```
