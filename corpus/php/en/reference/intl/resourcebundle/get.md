---
id: "en-php-function-resourcebundle-get"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::get"
aliases: ["resourcebundle_get"]
title: "Get data from the bundle"
signature: "public ResourceBundle|array|string|int|null ResourceBundle::get(string|int $index, bool $fallback = true)"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get data from the bundle

## Description

Object-oriented style

```php
public ResourceBundle|array|string|int|null ResourceBundle::get(string|int $index, bool $fallback = true)
```

Procedural style

```php
ResourceBundle|array|string|int|null resourcebundle_get(ResourceBundle $bundle, string|int $index, bool $fallback = true)
```

Get the data from the bundle by index or string key.

## Parameters

- **`$bundle`** — `ResourceBundle` object.
- **`$index`** — Data index, must be string or integer.
- **`$fallback`** — Whether locale should match exactly or fallback to parent locale is allowed.

## Return Values

Returns the data located at the index or `null` on error. Strings, integers and binary data strings are returned as corresponding PHP types, integer array is returned as PHP array. Complex types are returned as `ResourceBundle` object.

## Errors/Exceptions

A TypeError is thrown if the offset type is invalid.

A ValueError is thrown if if `$index` is a `string` and is empty or is a `int` and does not fit into a 32 bit integer type.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | A TypeError is thrown if the offset type is invalid. A ValueError is thrown if if `$index` is a `string` and is empty or is a `int` and does not fit into a 32 bit integer type. |

## Examples

**`resourcebundle_get()` example**

```php


<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo resourcebundle_get($r, 'somestring');
?>

   
```

**OO example**

```php


<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r->get('somestring');
?>

   
```

The above example will output:

```text


?Hola, mundo!

  
```

## See Also

`resourcebundle_count()`
