---
id: "en-php-function-ocicollection-getelem"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::getElem"
title: "Returns value of the element"
signature: "public string|float|null|false OCICollection::getElem(int $index)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.getelem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns value of the element

## Description

```php
public string|float|null|false OCICollection::getElem(int $index)
```

Returns element's value with the index `$index` (0-based).

## Parameters

- **`$index`** — The element index. First index is 0.

## Return Values

Returns `false` if such element doesn't exist; `null` if element is `null`; string if element is column of a string datatype or number if element is numeric field.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.assignelem`
