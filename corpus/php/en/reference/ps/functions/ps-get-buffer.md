---
id: "en-php-function-function-ps-get-buffer"
language: "php"
lang: "en"
category: "function"
name: "ps_get_buffer"
title: "Fetches the full buffer containig the generated PS data"
signature: "string ps_get_buffer(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-get-buffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetches the full buffer containig the generated PS data

## Description

```php
string ps_get_buffer(resource $psdoc)
```

This function is not implemented yet. It will always return an empty string. The idea for a later implementation is to write the contents of the postscript file into an internal buffer if in memory creation is requested, and retrieve the buffer content with this function. Currently, documents created in memory are send to the browser without buffering.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## See Also

`ps_open_file()`
