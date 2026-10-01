---
id: "en-php-function-ocicollection-trim"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::trim"
title: "Trims elements from the end of the collection"
signature: "public bool OCICollection::trim(int $num)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.trim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Trims elements from the end of the collection

## Description

```php
public bool OCICollection::trim(int $num)
```

Trims `$num` of elements from the end of the collection.

## Parameters

- **`$num`** — The number of elements to be trimmed.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.size`
