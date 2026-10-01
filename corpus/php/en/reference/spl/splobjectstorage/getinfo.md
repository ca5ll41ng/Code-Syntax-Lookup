---
id: "en-php-function-splobjectstorage-getinfo"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::getInfo"
title: "Returns the data associated with the current iterator entry"
signature: "public mixed SplObjectStorage::getInfo()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.getinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the data associated with the current iterator entry

## Description

```php
public mixed SplObjectStorage::getInfo()
```

Returns the data, or info, associated with the object pointed by the current iterator position.

## Parameters

This function has no parameters.

## Return Values

The data associated with the current iterator position.

## Examples

**`SplObjectStorage::getInfo()` example**

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

`SplObjectStorage::current()` `SplObjectStorage::rewind()` `SplObjectStorage::key()` `SplObjectStorage::next()` `SplObjectStorage::valid()` `SplObjectStorage::setInfo()`
