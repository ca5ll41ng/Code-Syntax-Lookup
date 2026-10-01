---
id: "en-php-function-ocilob-size"
language: "php"
lang: "en"
category: "function"
name: "OCILob::size"
title: "Returns size of large object"
signature: "public int|false OCILob::size()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns size of large object

## Description

```php
public int|false OCILob::size()
```

Gets the size of the large object.

## Parameters

This function has no parameters.

## Return Values

Returns length of large object value or `false` on failure. Empty objects have zero length.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |
