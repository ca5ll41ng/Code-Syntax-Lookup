---
id: "en-php-function-limititerator-construct"
language: "php"
lang: "en"
category: "function"
name: "LimitIterator::__construct"
title: "Construct a LimitIterator"
signature: "public LimitIterator::__construct(Iterator $iterator, int $offset = 0, int $limit = -1)"
module: "spl"
source_url: "https://www.php.net/manual/en/limititerator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a LimitIterator

## Description

```php
public LimitIterator::__construct(Iterator $iterator, int $offset = 0, int $limit = -1)
```

Constructs a new `LimitIterator` from an `$iterator` with a given starting `$offset` and maximum `$limit`.

## Parameters

- **`$iterator`** — The `Iterator` to limit.
- **`$offset`** — Optional offset of the limit.
- **`$limit`** — Optional count of the limit.

## Errors/Exceptions

Throws a `ValueError` if the `$offset` is less than `0` or the `$limit` is less than `-1`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` if `$offset` is less than `0`; previously it threw a `RuntimeException`. |
| 8.0.0 | Now throws a `ValueError` if `$limit` is less than `-1`; previously it threw a `RuntimeException`. |

## Examples

**`LimitIterator::__construct()` example**

```php


<?php
$ait = new ArrayIterator(array('a', 'b', 'c', 'd', 'e'));
$lit = new LimitIterator($ait, 1, 3);
foreach ($lit as $value) {
    echo $value . "\n";
}
?>

    
```

The above example will output:

```text


b
c
d

    
```

## See Also

LimitIterator examples
