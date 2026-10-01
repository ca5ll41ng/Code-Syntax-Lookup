---
id: "en-php-function-splobjectstorage-setinfo"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::setInfo"
title: "Sets the data associated with the current iterator entry"
signature: "public void SplObjectStorage::setInfo(mixed $info)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.setinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the data associated with the current iterator entry

## Description

```php
public void SplObjectStorage::setInfo(mixed $info)
```

Associates data, or info, with the object currently pointed to by the iterator.

## Parameters

- **`$info`** — The data to associate with the current iterator entry.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::setInfo()` example**

```php


<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    $s->setInfo("new");
    $s->next();
}
var_dump($s[$o1]);
var_dump($s[$o2]);
?>

    
```

The above example will output something similar to:

```text


string(3) "new"
string(3) "new"

    
```

## See Also

`SplObjectStorage::current()` `SplObjectStorage::rewind()` `SplObjectStorage::key()` `SplObjectStorage::next()` `SplObjectStorage::valid()` `SplObjectStorage::getInfo()`
