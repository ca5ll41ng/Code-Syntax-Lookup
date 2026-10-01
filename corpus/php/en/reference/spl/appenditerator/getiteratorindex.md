---
id: "en-php-function-appenditerator-getiteratorindex"
language: "php"
lang: "en"
category: "function"
name: "AppendIterator::getIteratorIndex"
title: "Gets an index of iterators"
signature: "public int|null AppendIterator::getIteratorIndex()"
module: "spl"
source_url: "https://www.php.net/manual/en/appenditerator.getiteratorindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets an index of iterators

## Description

```php
public int|null AppendIterator::getIteratorIndex()
```

Gets the index of the current inner iterator.

## Parameters

This function has no parameters.

## Return Values

Returns the zero-based, integer index of the current inner iterator if it exists, or `null` otherwise.

## Examples

**`AppendIterator.getIteratorIndex()` basic example**

```php


<?php
$array_a = new ArrayIterator(array('a' => 'aardwolf', 'b' => 'bear', 'c' => 'capybara'));
$array_b = new ArrayIterator(array('apple', 'orange', 'lemon'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

foreach ($iterator as $key => $current) {
    echo $iterator->getIteratorIndex() . '  ' . $key . ' ' . $current . PHP_EOL;
}
?>

    
```

The above example will output:

```text


0  a aardwolf
0  b bear
0  c capybara
1  0 apple
1  1 orange
1  2 lemon


    
```

## See Also

`AppendIterator::getInnerIterator()` `AppendIterator::getArrayIterator()`
