---
id: "en-php-function-function-gzrewind"
language: "php"
lang: "en"
category: "function"
name: "gzrewind"
title: "Rewind the position of a gz-file pointer"
signature: "bool gzrewind(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzrewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind the position of a gz-file pointer

## Description

```php
bool gzrewind(resource $stream)
```

Sets the file position indicator of the given gz-file pointer to the beginning of the file stream.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`gzseek()` `gztell()`
