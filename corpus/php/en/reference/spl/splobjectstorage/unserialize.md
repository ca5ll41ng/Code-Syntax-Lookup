---
id: "en-php-function-splobjectstorage-unserialize"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::unserialize"
title: "Unserializes a storage from its string representation"
signature: "public void SplObjectStorage::unserialize(string $data)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unserializes a storage from its string representation

## Description

```php
public void SplObjectStorage::unserialize(string $data)
```

Unserializes storage entries and attach them to the current storage.

## Parameters

- **`$data`** — The serialized representation of a storage.

## Return Values

No value is returned.

## Examples

**`SplObjectStorage::unserialize()` example**

```php


<?php
$s1 = new SplObjectStorage;
$s2 = new SplObjectStorage;
$o = new stdClass;
$s1[$o] = "data";

$s2->unserialize($s1->serialize());

var_dump(count($s2));
?>

    
```

The above example will output something similar to:

```text


int(1)

    
```

## See Also

`SplObjectStorage::serialize()`
