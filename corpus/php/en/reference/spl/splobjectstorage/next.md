---
id: "en-php-function-splobjectstorage-next"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::next"
title: "Move to the next entry"
signature: "public void SplObjectStorage::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move to the next entry

## Description

```php
public void SplObjectStorage::next()
```

Moves the iterator to the next `object` in the storage.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::next()` example**

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

`SPLObjectStorage::rewind()`
