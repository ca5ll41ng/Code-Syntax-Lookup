---
id: "en-php-function-function-ps-close"
language: "php"
lang: "en"
category: "function"
name: "ps_close"
title: "Closes a PostScript document"
signature: "bool ps_close(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a PostScript document

## Description

```php
bool ps_close(resource $psdoc)
```

Closes the PostScript document.

This function writes the trailer of the PostScript document. It also writes the bookmark tree. `ps_close()` does not free any resources, which is done by `ps_delete()`.

This function is also called by `ps_delete()` if it has not been called before.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_open_file()` `ps_delete()`
