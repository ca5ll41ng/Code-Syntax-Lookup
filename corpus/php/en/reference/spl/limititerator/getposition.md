---
id: "en-php-function-limititerator-getposition"
language: "php"
lang: "en"
category: "function"
name: "LimitIterator::getPosition"
title: "Return the current position"
signature: "public int LimitIterator::getPosition()"
module: "spl"
source_url: "https://www.php.net/manual/en/limititerator.getposition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the current position

## Description

```php
public int LimitIterator::getPosition()
```

Gets the current zero-based position of the inner `Iterator`.

## Parameters

This function has no parameters.

## Return Values

The current position.

## Examples

**`LimitIterator::getPosition()` example**

```php


<?php
$fruits = array(
    'a' => 'apple',
    'b' => 'banana',
    'c' => 'cherry',
    'd' => 'damson',
    'e' => 'elderberry'
);
$array_it = new ArrayIterator($fruits);
$limit_it = new LimitIterator($array_it, 2, 3);
foreach ($limit_it as $item) {
    echo $limit_it->getPosition() . ' ' . $item . "\n";
}
?>

    
```

The above example will output:

```text


2 cherry
3 damson
4 elderberry

    
```

## See Also

`FilterIterator::key()`
