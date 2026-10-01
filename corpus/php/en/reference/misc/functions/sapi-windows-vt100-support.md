---
id: "en-php-function-function-sapi-windows-vt100-support"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_vt100_support"
title: "Get or set VT100 support for the specified stream associated to an output buffer of a Windows console."
signature: "bool sapi_windows_vt100_support(resource $stream, bool|null $enable = null)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-vt100-support.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get or set VT100 support for the specified stream associated to an output buffer of a Windows console.

## Description

```php
bool sapi_windows_vt100_support(resource $stream, bool|null $enable = null)
```

If `$enable` is `null`, the function returns `true` if the stream `$stream` has VT100 control codes enabled, `false` otherwise.

If `$enable` is a `bool`, the function will try to enable or disable the VT100 features of the stream `$stream`. If the feature has been successfully enabled (or disabled), the function will return `true`, or `false` otherwise.

At startup, PHP tries to enable the VT100 feature of the `STDOUT`/`STDERR` streams. By the way, if those streams are redirected to a file, the VT100 features may not be enabled.

If VT100 support is enabled, it is possible to use control sequences as they are known from the VT100 terminal. They allow the modification of the terminal's output. On Windows these sequences are called Console Virtual Terminal Sequences.

> This function uses the `ENABLE_VIRTUAL_TERMINAL_PROCESSING` flag implemented in the Windows 10 API, so the VT100 feature may not be available on older Windows versions.

## Parameters

- **`$stream`** — The stream on which the function will operate.
- **`$enable`** — If `bool`, the VT100 feature will be enabled (if `true`) or disabled (if `false`).

## Return Values

If `$enable` is `null`: returns `true` if the VT100 feature is enabled, `false` otherwise.

If `$enable` is a `bool`: Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$enable` is now nullable. |

## Examples

**`sapi_windows_vt100_support()` default state**

By default, `STDOUT` and `STDERR` have the VT100 feature enabled.

```sh

    php -r "var_export(sapi_windows_vt100_support(STDOUT));echo ' ';var_export(sapi_windows_vt100_support(STDERR));"
   
```

The above example will output something similar to:

```text


true true

   
```

By the way, if a stream is redirected, the VT100 feature will not be enabled:

```sh

    php -r "var_export(sapi_windows_vt100_support(STDOUT));echo ' ';var_export(sapi_windows_vt100_support(STDERR));" 2>NUL
   
```

The above example will output something similar to:

```text

    true false
   
```

**`sapi_windows_vt100_support()` changing state**

You won't be able to enable the VT100 feature of `STDOUT` or `STDERR` if the stream is redirected.

```sh

    php -r "var_export(sapi_windows_vt100_support(STDOUT, true));echo ' ';var_export(sapi_windows_vt100_support(STDERR, true));" 2>NUL
   
```

The above example will output something similar to:

```text


true false

   
```

**Example usage of VT100 support enabled**

```php


<?php
$out = fopen('php://stdout','w');
fwrite($out, 'Just forgot a lettr.');
// Moves the cursor two characters backwards
fwrite($out, "\033[2D");
// Inserts one blank, shifting existing text to the right -> Just forgot a lett r.
fwrite($out, "\033[1@");
fwrite($out, 'e');
?>

   
```

The above example will output:

```text


Just forgot a letter.

   
```
