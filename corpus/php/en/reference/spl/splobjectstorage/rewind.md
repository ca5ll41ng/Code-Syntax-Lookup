---
id: "en-php-function-splobjectstorage-rewind"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::rewind"
title: "Rewind the iterator to the first storage element"
signature: "public void SplObjectStorage::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind the iterator to the first storage element

## Description

```php
public void SplObjectStorage::rewind()
```

Rewind the iterator to the first storage element.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::rewind()` example**

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

`SplObjectStorage::next()`
