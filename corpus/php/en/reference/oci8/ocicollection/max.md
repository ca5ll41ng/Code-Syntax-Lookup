---
id: "en-php-function-ocicollection-max"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::max"
title: "Returns the maximum number of elements in the collection"
signature: "public int|false OCICollection::max()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.max.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the maximum number of elements in the collection

## Description

```php
public int|false OCICollection::max()
```

Returns the maximum number of elements in the collection.

## Parameters

This function has no parameters.

## Return Values

Returns the maximum number as an integer, or `false` on errors.

If the returned value is 0, then the number of elements is not limited.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.size`
