---
id: "en-php-function-splobjectstorage-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::offsetExists"
title: "Checks whether an object exists in the storage"
signature: "public bool SplObjectStorage::offsetExists(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks whether an object exists in the storage

## Description

```php
public bool SplObjectStorage::offsetExists(object $object)
```

Checks whether an `object` exists in the storage.

> `SplObjectStorage::offsetExists()` is an alias of `SplObjectStorage::contains()`.

## Parameters

- **`$object`** — The `object` to look for.

## Return Values

Returns `true` if the `object` exists in the storage, and `false` otherwise.

## Examples

**`SplObjectStorage::offsetExists()` example**

```php


<?php
$s = new SplObjectStorage;
$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1);

var_dump($s->offsetExists($o1)); // Similar to isset($s[$o1])
var_dump($s->offsetExists($o2)); // Similar to isset($s[$o2])
?>

    
```

The above example will output something similar to:

```text


bool(true)
bool(false)

    
```

## See Also

`SplObjectStorage::offsetSet()` `SplObjectStorage::offsetGet()` `SplObjectStorage::offsetUnset()`
