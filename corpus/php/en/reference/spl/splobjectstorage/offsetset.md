---
id: "en-php-function-splobjectstorage-offsetset"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::offsetSet"
title: "Associates data to an object in the storage"
signature: "public void SplObjectStorage::offsetSet(object $object, mixed $info = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Associates data to an object in the storage

## Description

```php
public void SplObjectStorage::offsetSet(object $object, mixed $info = null)
```

Associate data to an `object` in the storage.

> `SplObjectStorage::offsetSet()` is an alias of `SplObjectStorage::attach()`.

## Parameters

- **`$object`** — The `object` to associate data with.
- **`$info`** — The data to associate with the `object`.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::offsetSet()` example**

```php


<?php
$s = new SplObjectStorage;

$o1 = new stdClass;

$s->offsetSet($o1, "hello"); // Similar to $s[$o1] = "hello";

var_dump($s[$o1]);
?>

    
```

The above example will output something similar to:

```text


string(5) "hello"

    
```

## See Also

`SplObjectStorage::attach()` `SplObjectStorage::offsetGet()` `SplObjectStorage::offsetExists()` `SplObjectStorage::offsetUnset()`
