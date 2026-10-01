---
id: "en-php-function-appenditerator-append"
language: "php"
lang: "en"
category: "function"
name: "AppendIterator::append"
title: "Appends an iterator"
signature: "public void AppendIterator::append(Iterator $iterator)"
module: "spl"
source_url: "https://www.php.net/manual/en/appenditerator.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends an iterator

## Description

```php
public void AppendIterator::append(Iterator $iterator)
```

Appends an iterator.

## Parameters

- **`$iterator`** — The iterator to append.

## Return Values

No value is returned.

## Examples

**`AppendIterator::append()` example**

```php


<?php
$array_a = new ArrayIterator(array('a', 'b', 'c'));
$array_b = new ArrayIterator(array('d', 'e', 'f'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

foreach ($iterator as $current) {
    echo $current;
}
?>

    
```

The above example will output:

```text


abcdef

    
```

## See Also

`AppendIterator::__construct()`
