---
id: "en-php-function-splobjectstorage-attach"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::attach"
title: "Adds an object in the storage"
signature: "#[\\Deprecated(since: '8.5', message: \"use method SplObjectStorage::offsetSet() instead\")] public void SplObjectStorage::attach(object $object, mixed $info = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.attach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds an object in the storage

## Description

```php
#[\Deprecated(since: '8.5', message: "use method SplObjectStorage::offsetSet() instead")] public void SplObjectStorage::attach(object $object, mixed $info = null)
```

Adds an `object` inside the storage, and optionally associate it to some data.

This method is an alias of `SplObjectStorage::offsetSet()`.

## Parameters

- **`$object`** — The `object` to add.
- **`$info`** — The data to associate with the `object`.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method has been deprecated in favor of `SplObjectStorage::offsetSet()`. |

## Examples

**`SplObjectStorage::attach()` example**

```php


<?php
$o1 = new stdClass;
$o2 = new stdClass;
$s = new SplObjectStorage();
$s->attach($o1); // similar to $s[$o1] = NULL;
$s->attach($o2, "hello"); // similar to $s[$o2] = "hello";

var_dump($s[$o1]);
var_dump($s[$o2]);

?>

    
```

The above example will output something similar to:

```text


NULL
string(5) "hello"

    
```

## See Also

`SplObjectStorage::detach()` `SplObjectStorage::offsetSet()`
