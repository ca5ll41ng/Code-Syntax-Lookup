---
id: "en-php-function-function-runkit7-object-id"
language: "php"
lang: "en"
category: "function"
name: "runkit7_object_id"
title: "Return the integer object handle for given object"
signature: "int runkit7_object_id(object $obj)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-object-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the integer object handle for given object

## Description

```php
int runkit7_object_id(object $obj)
```

This function is equivalent to `spl_object_id()`.

This function returns a unique identifier for the object. The object id is unique for the lifetime of the object. Once the object is destroyed, its id may be reused for other objects. This behavior is similar to `spl_object_hash()`.

## Parameters

- **`$obj`** — Any object.

## Return Values

An integer identifier that is unique for each currently existing object and is always the same for each object.

## Notes

> When an object is destroyed, its id may be reused for other objects.

## See Also

 `spl_object_id()`
