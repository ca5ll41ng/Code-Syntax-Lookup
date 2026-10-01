---
id: "en-php-function-function-gztell"
language: "php"
lang: "en"
category: "function"
name: "gztell"
title: "Tell gz-file pointer read/write position"
signature: "int|false gztell(resource $stream)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gztell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tell gz-file pointer read/write position

## Description

```php
int|false gztell(resource $stream)
```

Gets the position of the given file pointer; i.e., its offset into the uncompressed file stream.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.

## Return Values

The position of the file pointer or `false` if an error occurs.

## See Also

`gzopen()` `gzseek()` `gzrewind()`
