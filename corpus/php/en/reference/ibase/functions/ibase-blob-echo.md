---
id: "en-php-function-function-ibase-blob-echo"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_echo"
title: "Output blob contents to browser"
signature: "bool ibase_blob_echo(string $blob_id)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-echo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output blob contents to browser

## Description

```php
bool ibase_blob_echo(string $blob_id)
```

```php
bool ibase_blob_echo(resource $link_identifier, string $blob_id)
```

This function opens a BLOB for reading and sends its contents directly to standard output (the browser, in most cases).

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.
- **`$blob_id`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_blob_open()` `ibase_blob_close()` `ibase_blob_get()`
