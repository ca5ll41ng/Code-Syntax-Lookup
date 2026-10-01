---
id: "en-php-function-function-ibase-blob-open"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_open"
title: "Open blob for retrieving data parts"
signature: "resource|false ibase_blob_open(resource $link_identifier, string $blob_id)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open blob for retrieving data parts

## Description

```php
resource|false ibase_blob_open(resource $link_identifier, string $blob_id)
```

```php
resource|false ibase_blob_open(string $blob_id)
```

Opens an existing BLOB for reading.

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.
- **`$blob_id`** — A BLOB id.

## Return Values

Returns a BLOB handle for later use with `ibase_blob_get()` or `false` on failure.

## See Also

 `ibase_blob_close()` `ibase_blob_echo()` `ibase_blob_get()`
