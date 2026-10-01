---
id: "en-php-function-recursiveiteratoriterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveIteratorIterator::__construct"
title: "Construct a RecursiveIteratorIterator"
signature: "public RecursiveIteratorIterator::__construct(Traversable $iterator, int $mode = RecursiveIteratorIterator::LEAVES_ONLY, int $flags = 0)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveiteratoriterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a RecursiveIteratorIterator

## Description

```php
public RecursiveIteratorIterator::__construct(Traversable $iterator, int $mode = RecursiveIteratorIterator::LEAVES_ONLY, int $flags = 0)
```

Creates a `RecursiveIteratorIterator` from a `RecursiveIterator`.

## Parameters

- **`$iterator`** — The iterator being constructed from. Either a `RecursiveIterator` or `IteratorAggregate`.
- **`$mode`** — Optional mode. Possible values are `RecursiveIteratorIterator::LEAVES_ONLY` - The default. Lists only leaves in iteration. `RecursiveIteratorIterator::SELF_FIRST` - Lists leaves and parents in iteration with parents coming first. `RecursiveIteratorIterator::CHILD_FIRST` - Lists leaves and parents in iteration with leaves coming first.
- **`$flags`** — Optional flag. Possible values are `RecursiveIteratorIterator::CATCH_GET_CHILD` which will then ignore exceptions thrown in calls to `RecursiveIteratorIterator::getChildren()`.

## Examples

**Iterating a RecursiveIteratorIterator**

```php


<?php
$array = array(
    array(
        array(
            array(
                'leaf-0-0-0-0',
                'leaf-0-0-0-1'
            ),
            'leaf-0-0-0'
        ),
        array(
            array(
                'leaf-0-1-0-0',
                'leaf-0-1-0-1'
            ),
            'leaf-0-1-0'
        ),
        'leaf-0-0'
    )
);

$iterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator($array),
    $mode
);
foreach ($iterator as $key => $leaf) {
    echo "$key => $leaf", PHP_EOL;
}
?>

    
```

Output with `$mode = RecursiveIteratorIterator::LEAVES_ONLY`

```text


0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
0 => leaf-0-0-0
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
0 => leaf-0-1-0
0 => leaf-0-0

    
```

Output with `$mode = RecursiveIteratorIterator::SELF_FIRST`

```text


0 => Array
0 => Array
0 => Array
0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
1 => leaf-0-0-0
1 => Array
0 => Array
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
1 => leaf-0-1-0
2 => leaf-0-0

    
```

Output with `$mode = RecursiveIteratorIterator::CHILD_FIRST`

```text


0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
0 => Array
1 => leaf-0-0-0
0 => Array
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
0 => Array
1 => leaf-0-1-0
1 => Array
2 => leaf-0-0
0 => Array

    
```
