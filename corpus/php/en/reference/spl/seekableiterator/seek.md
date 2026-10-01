---
id: "en-php-function-seekableiterator-seek"
language: "php"
lang: "en"
category: "function"
name: "SeekableIterator::seek"
title: "Seeks to a position"
signature: "public void SeekableIterator::seek(int $offset)"
module: "spl"
source_url: "https://www.php.net/manual/en/seekableiterator.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seeks to a position

## Description

```php
public void SeekableIterator::seek(int $offset)
```

Seeks to a given position in the iterator.

## Parameters

- **`$offset`** — The position to seek to.

## Return Values

No value is returned.

## Errors/Exceptions

Implementations should throw an `OutOfBoundsException` if the `$offset` is not seekable.

## Examples

**`SeekableIterator::seek()` example**

Seek to the item at position 3 in the iterator (`ArrayIterator` implements `SeekableIterator`).

```php


<?php
$array = array("apple", "banana", "cherry", "damson", "elderberry");
$iterator = new ArrayIterator($array);
$iterator->seek(3);
echo $iterator->current();
?>

    
```

The above example will output something similar to:

```text


damson

    
```

## See Also

`SeekableIterator` `Iterator`
