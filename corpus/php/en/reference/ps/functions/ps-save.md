---
id: "en-php-function-function-ps-save"
language: "php"
lang: "en"
category: "function"
name: "ps_save"
title: "Save current context"
signature: "bool ps_save(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save current context

## Description

```php
bool ps_save(resource $psdoc)
```

Saves the current graphics context, containing colors, translation and rotation settings and some more. A saved context can be restored with `ps_restore()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_restore()`
