---
id: "en-php-function-function-ps-open-file"
language: "php"
lang: "en"
category: "function"
name: "ps_open_file"
title: "Opens a file for output"
signature: "bool ps_open_file(resource $psdoc, [string $filename = ...])"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-open-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens a file for output

## Description

```php
bool ps_open_file(resource $psdoc, [string $filename = ...])
```

Creates a new file on disk and writes the PostScript document into it. The file will be closed when `ps_close()` is called.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$filename`** — The name of the postscript file. If `$filename` is not passed the document will be created in memory and all output will go straight to the browser.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_close()`
