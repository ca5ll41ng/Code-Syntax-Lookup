---
id: "en-php-function-function-posix-isatty"
language: "php"
lang: "en"
category: "function"
name: "posix_isatty"
title: "Determine if a file descriptor is an interactive terminal"
signature: "bool posix_isatty(resource|int $file_descriptor)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-isatty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine if a file descriptor is an interactive terminal

## Description

```php
bool posix_isatty(resource|int $file_descriptor)
```

Determines if the file descriptor `$file_descriptor` refers to a valid terminal type device.

## Parameters

- **`$file_descriptor`** — The file descriptor, which is expected to be either a file `resource` or an `int`. An `int` will be assumed to be a file descriptor that can be passed directly to the underlying system call.

## Return Values

Returns `true` if `$file_descriptor` is an open descriptor connected to a terminal and `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now raises an `E_WARNING` when an invalid `$file_descriptor` is encountered. |
| 8.4.0 | Set errno (error number) to `EBADF` when the file descriptor/stream passed is invalid. |
| 8.3.0 | Type error `E_WARNING`s are now raised for integer coercions following the usual PHP type coercion semantics. |

## See Also

`posix_ttyname()` `stream_isatty()`
