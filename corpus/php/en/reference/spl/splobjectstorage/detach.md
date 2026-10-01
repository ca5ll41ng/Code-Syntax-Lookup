---
id: "en-php-function-splobjectstorage-detach"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::detach"
title: "Removes an `object` from the storage"
signature: "#[\\Deprecated(since: '8.5', message: \"use method SplObjectStorage::offsetUnset() instead\")] public void SplObjectStorage::detach(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.detach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes an `object` from the storage

## Description

```php
#[\Deprecated(since: '8.5', message: "use method SplObjectStorage::offsetUnset() instead")] public void SplObjectStorage::detach(object $object)
```

Removes the `object` from the storage.

## Parameters

- **`$object`** — The `object` to remove.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method has been deprecated in favor of `SplObjectStorage::offsetUnset()`. |

## Examples

**`SplObjectStorage::detach()` example**

```php


<?php
$o = new stdClass;
$s = new SplObjectStorage();
$s->attach($o);
var_dump(count($s));
$s->detach($o);
var_dump(count($s));
?>

    
```

The above example will output something similar to:

```text


int(1)
int(0)

    
```

## See Also

`SplObjectStorage::attach()` `SplObjectStorage::removeAll()`
