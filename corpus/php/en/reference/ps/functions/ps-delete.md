---
id: "en-php-function-function-ps-delete"
language: "php"
lang: "en"
category: "function"
name: "ps_delete"
title: "Deletes all resources of a PostScript document"
signature: "bool ps_delete(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes all resources of a PostScript document

## Description

```php
bool ps_delete(resource $psdoc)
```

Mainly frees memory used by the document. Also closes a file, if it was not closed before with `ps_close()`. You should in any case close the file with `ps_close()` before, because `ps_close()` not just closes the file but also outputs a trailor containing PostScript comments like the number of pages in the document and adding the bookmark hierarchy.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_close()`
