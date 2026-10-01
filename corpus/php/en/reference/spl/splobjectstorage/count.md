---
id: "en-php-function-splobjectstorage-count"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::count"
title: "Returns the number of objects in the storage"
signature: "public int SplObjectStorage::count(int $mode = COUNT_NORMAL)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of objects in the storage

## Description

```php
public int SplObjectStorage::count(int $mode = COUNT_NORMAL)
```

Counts the number of objects in the storage.

## Parameters

- **`$mode`** — If the optional `$mode` parameter is set to `COUNT_RECURSIVE` (or 1), `SplObjectStorage::count()` will recursively count the storage.

## Return Values

The number of objects in the storage.

## Examples

**`SplObjectStorage::count()` example**

```php


<?php
$s = new SplObjectStorage();
$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1);
$s->attach($o2);
$s->attach($o1);
var_dump($s->count());
var_dump(count($s));
?>

    
```

The above example will output something similar to:

```text


int(2)
int(2)

    
```

## See Also

`SplObjectStorage::attach()` `SplObjectStorage::detach()`
