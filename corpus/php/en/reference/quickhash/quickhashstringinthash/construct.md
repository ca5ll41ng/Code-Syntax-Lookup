---
id: "en-php-function-quickhashstringinthash-construct"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::__construct"
title: "Creates a new QuickHashStringIntHash object"
signature: "public QuickHashStringIntHash::__construct(int $size, int $options = 0)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new QuickHashStringIntHash object

## Description

```php
public QuickHashStringIntHash::__construct(int $size, int $options = 0)
```

This constructor creates a new `QuickHashStringIntHash`. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

## Parameters

- **`$size`** — The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from `64` to `4194304`.
- **`$options`** — The options that you can pass in are: `QuickHashStringIntHash::CHECK_FOR_DUPES`, which makes sure no duplicate entries are added to the hash and `QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC` to not use PHP's internal memory manager.

## Return Values

Returns a new `QuickHashStringIntHash` object.

## Examples

**`QuickHashStringIntHash::__construct()` example**

```php


<?php
var_dump( new QuickHashStringIntHash( 1024 ) );
var_dump( new QuickHashStringIntHash( 1024, QuickHashStringIntHash::CHECK_FOR_DUPES ) );
?>

   
```
