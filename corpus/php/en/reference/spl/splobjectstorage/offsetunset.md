---
id: "en-php-function-splobjectstorage-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::offsetUnset"
title: "Removes an object from the storage"
signature: "public void SplObjectStorage::offsetUnset(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes an object from the storage

## Description

```php
public void SplObjectStorage::offsetUnset(object $object)
```

Removes an `object` from the storage.

> `SplObjectStorage::offsetUnset()` is an alias of `SplObjectStorage::detach()`.

## Parameters

- **`$object`** — The `object` to remove.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::offsetUnset()` example**

```php


<?php
$o = new stdClass;
$s = new SplObjectStorage();
$s->attach($o);
var_dump(count($s));
$s->offsetUnset($o); // Similar to unset($s[$o])
var_dump(count($s));
?>

    
```

The above example will output something similar to:

```text


int(1)
int(0)

    
```

## See Also

`SplObjectStorage::offsetGet()` `SplObjectStorage::offsetSet()` `SplObjectStorage::offsetExists()`
