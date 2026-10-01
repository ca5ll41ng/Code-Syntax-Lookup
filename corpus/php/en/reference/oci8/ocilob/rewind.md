---
id: "en-php-function-ocilob-rewind"
language: "php"
lang: "en"
category: "function"
name: "OCILob::rewind"
title: "Moves the internal pointer to the beginning of the large object"
signature: "public bool OCILob::rewind()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moves the internal pointer to the beginning of the large object

## Description

```php
public bool OCILob::rewind()
```

Sets the internal pointer to the beginning of the large object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.seek` `ocilob.tell`
