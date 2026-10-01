---
id: "en-php-function-streamwrapper-stream-truncate"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_truncate"
title: "Truncate stream"
signature: "public bool streamWrapper::stream_truncate(int $new_size)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-truncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Truncate stream

## Description

```php
public bool streamWrapper::stream_truncate(int $new_size)
```

Will respond to truncation, e.g., through `ftruncate()`.

## Parameters

- **`$new_size`** — The new size.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ftruncate()`
