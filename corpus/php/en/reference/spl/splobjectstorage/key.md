---
id: "en-php-function-splobjectstorage-key"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::key"
title: "Returns the index at which the iterator currently is"
signature: "public int SplObjectStorage::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the index at which the iterator currently is

## Description

```php
public int SplObjectStorage::key()
```

Returns the index at which the iterator currently is.

## Parameters

This function has no parameters.

## Return Values

The index corresponding to the position of the iterator.

## Examples

**`SplObjectStorage::key()` example**

```php


<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    $index  = $s->key();
    $object = $s->current(); // similar to current($s)

    var_dump($index);
    var_dump($object);
    $s->next();
}
?>

    
```

The above example will output something similar to:

```text


int(0)
object(stdClass)#2 (0) {
}
int(1)
object(stdClass)#3 (0) {
}

    
```

## See Also

`SplObjectStorage::rewind()` `SplObjectStorage::current()` `SplObjectStorage::next()` `SplObjectStorage::valid()`
