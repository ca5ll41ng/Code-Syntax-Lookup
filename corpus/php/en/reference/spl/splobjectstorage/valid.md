---
id: "en-php-function-splobjectstorage-valid"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::valid"
title: "Returns if the current iterator entry is valid"
signature: "public bool SplObjectStorage::valid()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns if the current iterator entry is valid

## Description

```php
public bool SplObjectStorage::valid()
```

Returns if the current iterator entry is valid.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the iterator entry is valid, `false` otherwise.

## Examples

**`SplObjectStorage::valid()` example**

```php


<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    echo $s->key()."\n";
    $s->next();
}
?>

    
```

The above example will output something similar to:

```text


0
1

    
```

## See Also

`SplObjectStorage::current()` `SplObjectStorage::getInfo()`
