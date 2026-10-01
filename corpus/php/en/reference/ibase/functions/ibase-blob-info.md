---
id: "en-php-function-function-ibase-blob-info"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_info"
title: "Return blob length and other useful info"
signature: "array ibase_blob_info(resource $link_identifier, string $blob_id)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return blob length and other useful info

## Description

```php
array ibase_blob_info(resource $link_identifier, string $blob_id)
```

```php
array ibase_blob_info(string $blob_id)
```

Returns the BLOB length and other useful information.

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.
- **`$blob_id`** — A BLOB id.

## Return Values

Returns an array containing information about a BLOB. The information returned consists of the length of the BLOB, the number of segments it contains, the size of the largest segment, and whether it is a stream BLOB or a segmented BLOB.
