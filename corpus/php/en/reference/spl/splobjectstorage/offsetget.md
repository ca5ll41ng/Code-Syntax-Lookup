---
id: "en-php-function-splobjectstorage-offsetget"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::offsetGet"
title: "Returns the data associated with an `object`"
signature: "public mixed SplObjectStorage::offsetGet(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the data associated with an `object`

## Description

```php
public mixed SplObjectStorage::offsetGet(object $object)
```

Returns the data associated with an `object` in the storage.

## Parameters

- **`$object`** — The `object` to look for.

## Return Values

The data previously associated with the `object` in the storage.

## Errors/Exceptions

Throws `UnexpectedValueException` when `$object` could not be found.

## Examples

**`SplObjectStorage::offsetGet()` example**

```php


<?php
$s = new SplObjectStorage;

$o1 = new stdClass;
$o2 = new stdClass;

$s[$o1] = "hello";
$s->attach($o2);


var_dump($s->offsetGet($o1)); // Similar to $s[$o1]
var_dump($s->offsetGet($o2)); // Similar to $s[$o2]
?>

    
```

The above example will output something similar to:

```text


string(5) "hello"
NULL

    
```

## See Also

`SplObjectStorage::offsetSet()` `SplObjectStorage::offsetExists()` `SplObjectStorage::offsetUnset()`
