---
id: "en-php-function-infiniteiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "InfiniteIterator::__construct"
title: "Constructs an InfiniteIterator"
signature: "public InfiniteIterator::__construct(Iterator $iterator)"
module: "spl"
source_url: "https://www.php.net/manual/en/infiniteiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs an InfiniteIterator

## Description

```php
public InfiniteIterator::__construct(Iterator $iterator)
```

Constructs an `InfiniteIterator` from an `Iterator`.

## Parameters

- **`$iterator`** — The iterator to infinitely iterate over.

## Examples

**`InfiniteIterator::__construct()` example**

```php


<?php
$arrayit  = new ArrayIterator(array('cat','dog'));
$infinite = new InfiniteIterator($arrayit);
$limit    = new LimitIterator($infinite, 0, 7);
foreach($limit as $value)
{
    echo "$value\n";
}
?>

    
```

The above example will output:

```text


cat
dog
cat
dog
cat
dog
cat

    
```

## See Also

`InfiniteIterator::next()`
