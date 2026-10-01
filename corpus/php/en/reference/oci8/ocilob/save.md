---
id: "en-php-function-ocilob-save"
language: "php"
lang: "en"
category: "function"
name: "OCILob::save"
title: "Saves data to the large object"
signature: "public bool OCILob::save(string $data, int $offset = 0)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Saves data to the large object

## Description

```php
public bool OCILob::save(string $data, int $offset = 0)
```

Saves `$data` to the large object.

## Parameters

- **`$data`** — The data to be saved.
- **`$offset`** — Can be used to indicate offset from the beginning of the large object.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.write` `ocilob.import`
