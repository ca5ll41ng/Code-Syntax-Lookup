---
id: "en-php-function-splobjectstorage-seek"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::seek"
title: "Seeks iterator to a position"
signature: "public void SplObjectStorage::seek(int $offset)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seeks iterator to a position

## Description

```php
public void SplObjectStorage::seek(int $offset)
```

Seeks to a given position in the iterator.

## Parameters

- **`$offset`** — The position to seek to.

## Return Values

No value is returned.

## Errors/Exceptions

Throws an `OutOfBoundsException` if the `$offset` is not seekable.

## Examples

**`SplObjectStorage::seek()` example**

Seeks to item position 2 in the iterator.

```php


<?php
class Test {
    public function __construct(public string $marker) {}
}

$a = new Test("a");
$b = new Test("b");
$c = new Test("c");

$storage = new SplObjectStorage();
$storage[$a] = "first";
$storage[$b] = "second";
$storage[$c] = "third";

$storage->seek(2);
var_dump($storage->key());
var_dump($storage->current());
?>

   
```

The above example will output:

```text


int(2)
object(Test)#3 (1) {
  ["marker"]=>
  string(1) "c"
}

   
```

## See Also

 `SeekableIterator`
