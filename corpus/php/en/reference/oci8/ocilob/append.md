---
id: "en-php-function-ocilob-append"
language: "php"
lang: "en"
category: "function"
name: "OCILob::append"
title: "Appends data from the large object to another large object"
signature: "public bool OCILob::append(OCILob $from)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends data from the large object to another large object

## Description

```php
public bool OCILob::append(OCILob $from)
```

Appends data from the large object to the end of another large object.

Writing to the large object with this method will fail if buffering was previously enabled. You must disable buffering before appending. You may need to flush buffers with `ocilob.flush` before disabling buffering.

## Parameters

- **`$from`** — The copied LOB.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.flush` `ocilob.setbuffering` `ocilob.getbuffering`
