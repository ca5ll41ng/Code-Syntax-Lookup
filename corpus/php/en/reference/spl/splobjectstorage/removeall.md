---
id: "en-php-function-splobjectstorage-removeall"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::removeAll"
title: "Removes objects contained in another storage from the current storage"
signature: "public int SplObjectStorage::removeAll(SplObjectStorage $storage)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.removeall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes objects contained in another storage from the current storage

## Description

```php
public int SplObjectStorage::removeAll(SplObjectStorage $storage)
```

Removes objects contained in another storage from the current storage.

## Parameters

- **`$storage`** — The storage containing the elements to remove.

## Return Values

Returns the number of remaining objects.

## Examples

**`SplObjectStorage::removeAll()` example**

```php


<?php
$o1 = new stdClass;
$o2 = new stdClass;
$a = new SplObjectStorage();
$a[$o1] = "foo";

$b = new SplObjectStorage();
$b[$o1] = "bar";
$b[$o2] = "gee";

var_dump(count($b));
$b->removeAll($a);
var_dump(count($b));
?>

    
```

The above example will output something similar to:

```text


int(2)
int(1)

    
```

## See Also

`SplObjectStorage::addAll()`
