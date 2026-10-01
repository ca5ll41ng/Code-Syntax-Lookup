---
id: "en-php-function-function-ps-restore"
language: "php"
lang: "en"
category: "function"
name: "ps_restore"
title: "Restore previously save context"
signature: "bool ps_restore(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-restore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Restore previously save context

## Description

```php
bool ps_restore(resource $psdoc)
```

Restores a previously saved graphics context. Any call of `ps_save()` must be accompanied by a call to `ps_restore()`. All coordinate transformations, line style settings, color settings, etc. are being restored to the state before the call of `ps_save()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_save()`
