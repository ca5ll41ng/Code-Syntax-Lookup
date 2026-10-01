---
id: "en-php-function-function-posix-ttyname"
language: "php"
lang: "en"
category: "function"
name: "posix_ttyname"
title: "Determine terminal device name"
signature: "string|false posix_ttyname(resource|int $file_descriptor)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-ttyname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine terminal device name

## Description

```php
string|false posix_ttyname(resource|int $file_descriptor)
```

Returns a `string` for the absolute path to the current terminal device that is open on the file descriptor `$file_descriptor`.

## Parameters

- **`$file_descriptor`** — The file descriptor, which is expected to be either a file `resource` or an `int`. An `int` will be assumed to be a file descriptor that can be passed directly to the underlying system call.

## Return Values

On success, returns a `string` of the absolute path of the `$file_descriptor`. On failure, returns `false`

## Errors/Exceptions

On invalid `$file_descriptor` integer values an `E_WARNING` is raised.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `last_error` is now set to `EBADF` when an invalid `$file_descriptor` is encountered. |
| 8.3.0 | Type error `E_WARNING`s are now raised for integer coercions following the usual PHP type coercion semantics. |
| 8.3.0 | On invalid `$file_descriptor` integer values an `E_WARNING` is now raised. |

## See Also

`posix_isatty()` `stream_isatty()`
