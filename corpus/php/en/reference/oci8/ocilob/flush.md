---
id: "en-php-function-ocilob-flush"
language: "php"
lang: "en"
category: "function"
name: "OCILob::flush"
title: "Flushes/writes buffer of the LOB to the server"
signature: "public bool OCILob::flush(int $flag = 0)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flushes/writes buffer of the LOB to the server

## Description

```php
public bool OCILob::flush(int $flag = 0)
```

`OCILob::flush()` actually writes data to the server.

## Parameters

- **`$flag`** — By default, resources are not freed, but using flag `OCI_LOB_BUFFER_FREE` you can do it explicitly. Be sure you know what you're doing - next read/write operation to the same part of LOB will involve a round-trip to the server and initialize new buffer resources. It is recommended to use `OCI_LOB_BUFFER_FREE` flag only when you are not going to work with the LOB anymore.

## Return Values

Returns `true` on success or `false` on failure.

Returns `false` if buffering was not enabled or an error occurred.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.getbuffering` `ocilob.setbuffering`
