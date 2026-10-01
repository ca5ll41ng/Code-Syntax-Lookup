---
id: "en-php-function-splobjectstorage-current"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::current"
title: "Returns the current storage entry"
signature: "public object SplObjectStorage::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current storage entry

## Description

```php
public object SplObjectStorage::current()
```

Returns the current storage entry.

## Parameters

This function has no parameters.

## Return Values

The `object` at the current iterator position.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `SplObjectStorage::current()` now throws an `Error` exception if the current position is invalid. Previously, `false` was returned instead. |

## Examples

**`SplObjectStorage::current()` example**

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
    $data   = $s->getInfo();

    var_dump($object);
    var_dump($data);
    $s->next();
}
?>

    
```

The above example will output something similar to:

```text


object(stdClass)#2 (0) {
}
string(2) "d1"
object(stdClass)#3 (0) {
}
string(2) "d2"

    
```

## See Also

`SplObjectStorage::rewind()` `SplObjectStorage::key()` `SplObjectStorage::next()` `SplObjectStorage::valid()` `SplObjectStorage::getInfo()`
