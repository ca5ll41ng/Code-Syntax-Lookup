---
id: "en-php-function-function-get-resources"
language: "php"
lang: "en"
category: "function"
name: "get_resources"
title: "Returns active resources"
signature: "array get_resources(string|null $type = null)"
module: "info"
source_url: "https://www.php.net/manual/en/function.get-resources.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns active resources

## Description

```php
array get_resources(string|null $type = null)
```

Returns an array of all currently active `resource`s, optionally filtered by resource type.

> This function is meant for debugging and testing purposes. It is not supposed to be used in production environments, especially not to access or even manipulate resources which are normally not accessible (e.g. the underlying stream resource of `SplFileObject` instances).

## Parameters

- **`$type`** — If defined, this will cause `get_resources()` to only return resources of the given type. A list of resource types is available. — If the `string` `Unknown` is provided as the type, then only resources that are of an unknown type will be returned. — If omitted, all resources will be returned.

## Return Values

Returns an `array` of currently active resources, indexed by resource number.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$type` is nullable now. |

## Examples

**Unfiltered `get_resources()`**

```php


<?php
$fp = tmpfile();
var_dump(get_resources());
?>

    
```

The above example will output something similar to:

```text


array(1) {
  [1]=>
  resource(1) of type (stream)
}

    
```

**Filtered `get_resources()`**

```php


<?php
$fp = tmpfile();
var_dump(get_resources('stream'));
var_dump(get_resources('curl'));
?>

    
```

The above example will output something similar to:

```text


array(1) {
  [1]=>
  resource(1) of type (stream)
}
array(0) {
}

    
```

## See Also

`get_loaded_extensions()` `get_defined_constants()` `get_defined_functions()` `get_defined_vars()`
