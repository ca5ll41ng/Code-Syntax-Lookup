---
id: "en-php-function-quickhashinthash-construct"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::__construct"
title: "Creates a new QuickHashIntHash object"
signature: "public QuickHashIntHash::__construct(int $size, [int $options = ...])"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new QuickHashIntHash object

## Description

```php
public QuickHashIntHash::__construct(int $size, [int $options = ...])
```

This constructor creates a new `QuickHashIntHash`. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

## Parameters

- **`$size`** — The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from `64` to `4194304`.
- **`$options`** — The options that you can pass in are: `QuickHashIntHash::CHECK_FOR_DUPES`, which makes sure no duplicate entries are added to the hash; `QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC` to not use PHP's internal memory manager as well as one of `QuickHashIntHash::HASHER_NO_HASH`, `QuickHashIntHash::HASHER_JENKINS1` or `QuickHashIntHash::HASHER_JENKINS2`. These last three configure which hashing algorithm to use. All options can be combined using bitmasks.

## Return Values

Returns a new `QuickHashIntHash` object.

## Examples

**`QuickHashIntHash::__construct()` example**

```php


<?php
var_dump( new QuickHashIntHash( 1024 ) );
var_dump( new QuickHashIntHash( 1024, QuickHashIntHash::CHECK_FOR_DUPES ) );
var_dump(
    new QuickHashIntHash(
        1024,
        QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC | QuickHashIntHash::HASHER_JENKINS2
    )
);
?>

   
```
