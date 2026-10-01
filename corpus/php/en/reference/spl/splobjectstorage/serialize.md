---
id: "en-php-function-splobjectstorage-serialize"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::serialize"
title: "Serializes the storage"
signature: "public string SplObjectStorage::serialize()"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializes the storage

## Description

```php
public string SplObjectStorage::serialize()
```

Returns a string representation of the storage.

## Parameters

This function has no parameters.

## Return Values

A string representing the storage.

## Examples

**`SplObjectStorage::serialize()` example**

```php


<?php
$s = new SplObjectStorage;
$o = new stdClass;
$s[$o] = "data";

echo $s->serialize()."\n";
?>

    
```

The above example will output something similar to:

```text


x:i:1;O:8:"stdClass":0:{},s:4:"data";;m:a:0:{}

    
```

## See Also

`SplObjectStorage::unserialize()`
