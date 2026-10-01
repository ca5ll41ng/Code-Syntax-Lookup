---
id: "en-php-function-splobjectstorage-addall"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::addAll"
title: "Adds all objects from another storage"
signature: "public int SplObjectStorage::addAll(SplObjectStorage $storage)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.addall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds all objects from another storage

## Description

```php
public int SplObjectStorage::addAll(SplObjectStorage $storage)
```

Adds all objects-data pairs from a different storage in the current storage.

## Parameters

- **`$storage`** — The storage you want to import.

## Return Values

The number of objects in the storage.

## Examples

**`SplObjectStorage::addAll()` example**

```php


<?php
$o = new stdClass;
$a = new SplObjectStorage();
$a[$o] = "hello";

$b = new SplObjectStorage();
$b->addAll($a);
echo $b[$o]."\n";
?>

    
```

The above example will output something similar to:

```text


hello

    
```

## See Also

`SplObjectStorage::removeAll()`
