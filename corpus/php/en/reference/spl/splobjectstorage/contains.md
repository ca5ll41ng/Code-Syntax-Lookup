---
id: "en-php-function-splobjectstorage-contains"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::contains"
title: "Checks if the storage contains a specific object"
signature: "#[\\Deprecated(since: '8.5', message: \"use method SplObjectStorage::offsetExists() instead\")] public bool SplObjectStorage::contains(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the storage contains a specific object

## Description

```php
#[\Deprecated(since: '8.5', message: "use method SplObjectStorage::offsetExists() instead")] public bool SplObjectStorage::contains(object $object)
```

Checks if the storage contains the `object` provided.

## Parameters

- **`$object`** — The `object` to look for.

## Return Values

Returns `true` if the `object` is in the storage, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method has been deprecated in favor of `SplObjectStorage::offsetExists()`. |

## Examples

**`SplObjectStorage::contains()` example**

```php


<?php
$o1 = new stdClass;
$o2 = new stdClass;

$s = new SplObjectStorage();

$s[$o1] = "hello";
var_dump($s->contains($o1));
var_dump($s->contains($o2));
?>

    
```

The above example will output something similar to:

```text


bool(true)
bool(false)

    
```

## See Also

`SplObjectStorage::offsetExists()`
