---
id: "en-php-function-function-readgzfile"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "readgzfile"
title: "Output a gz-file"
signature: "int|false readgzfile(string $filename, bool $use_include_path = false)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.readgzfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output a gz-file

## Description

```php
int|false readgzfile(string $filename, bool $use_include_path = false)
```

Reads a file, decompresses it and writes it to standard output.

`readgzfile()` can be used to read a file which is not in gzip format; in this case `readgzfile()` will directly read from the file without decompression.

## Parameters

- **`$filename`** — The file name. This file will be opened from the filesystem and its contents written to standard output.
- **`$use_include_path`** — When set to `true` the include_path will be used to determine which file to open.

## Return Values

Returns the number of (uncompressed) bytes read from the file on success, or `false` on failure

## Errors/Exceptions

Upon failure, an `E_WARNING` is emitted.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$use_include_path` is now of type `bool`. Previously, it was of type `int`. |

## See Also

`gzpassthru()` `gzfile()` `gzopen()`
