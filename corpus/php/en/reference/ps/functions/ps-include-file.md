---
id: "en-php-function-function-ps-include-file"
language: "php"
lang: "en"
category: "function"
name: "ps_include_file"
title: "Reads an external file with raw PostScript code"
signature: "bool ps_include_file(resource $psdoc, string $file)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-include-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads an external file with raw PostScript code

## Description

```php
bool ps_include_file(resource $psdoc, string $file)
```

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$file`**

## Return Values

Returns `true` on success or `false` on failure.
