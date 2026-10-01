---
id: "en-php-function-function-gzopen"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "gzopen"
title: "Open gz-file"
signature: "resource|false gzopen(string $filename, string $mode, bool $use_include_path = false)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open gz-file

## Description

```php
resource|false gzopen(string $filename, string $mode, bool $use_include_path = false)
```

Opens a gzip (.gz) file for reading or writing.

`gzopen()` can be used to read a file which is not in gzip format; in this case `gzread()` will directly read from the file without decompression.

## Parameters

- **`$filename`** — The file name.
- **`$mode`** — As in `fopen()` (`rb` or `wb`) but can also include a compression level (`wb9`) or a strategy: `f` for filtered data as in `wb6f`, `h` for `Huffman only compression` as in `wb1h`. (See the description of `deflateInit2` in `zlib.h` for more information about the strategy parameter.)
- **`$use_include_path`** — If set to `true`, files in the include_path are searched for too.

## Return Values

Returns a file pointer to the file opened, after that, everything you read from this file descriptor will be transparently decompressed and what you write gets compressed.

If the open fails, the function returns `false`.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$use_include_path` is now of type `bool`. Previously, it was of type `int`. |

## Examples

**`gzopen()` Example**

```php


<?php
$fp = gzopen("/tmp/file.gz", "r");
?>

    
```

## See Also

`gzclose()`
