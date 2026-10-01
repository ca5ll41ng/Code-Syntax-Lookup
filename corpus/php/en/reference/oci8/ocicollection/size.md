---
id: "en-php-function-ocicollection-size"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::size"
title: "Returns size of the collection"
signature: "public int|false OCICollection::size()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns size of the collection

## Description

```php
public int|false OCICollection::size()
```

Returns the size of the collection.

## Parameters

This function has no parameters.

## Return Values

Returns the number of elements in the collection or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.max`
