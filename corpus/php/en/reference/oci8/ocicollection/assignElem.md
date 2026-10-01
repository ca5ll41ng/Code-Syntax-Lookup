---
id: "en-php-function-ocicollection-assignelem"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::assignElem"
title: "Assigns a value to the element of the collection"
signature: "public bool OCICollection::assignElem(int $index, string $value)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.assignelem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assigns a value to the element of the collection

## Description

```php
public bool OCICollection::assignElem(int $index, string $value)
```

Assigns a value to the element with index `$index`.

## Parameters

- **`$index`** — The element index. First index is 0.
- **`$value`** — Can be a string or a number.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.getelem`
