---
id: "en-php-function-ocicollection-append"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::append"
title: "Appends element to the collection"
signature: "public bool OCICollection::append(string $value)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends element to the collection

## Description

```php
public bool OCICollection::append(string $value)
```

Appends element to the end of the collection.

## Parameters

- **`$value`** — The value to be added to the collection.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.assign`
