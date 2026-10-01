---
id: "en-php-function-ocicollection-assign"
language: "php"
lang: "en"
category: "function"
name: "OCICollection::assign"
title: "Assigns a value to the collection from another existing collection"
signature: "public bool OCICollection::assign(OCICollection $from)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocicollection.assign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assigns a value to the collection from another existing collection

## Description

```php
public bool OCICollection::assign(OCICollection $from)
```

Assigns a value to the collection from another, previously created collection. Both collections must be created with `oci_new_collection()` prior to using them.

## Parameters

- **`$from`** — An instance of OCICollection.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Collection` class was renamed to `OCICollection` to align with PHP naming standards. |

## See Also

`ocicollection.append`
