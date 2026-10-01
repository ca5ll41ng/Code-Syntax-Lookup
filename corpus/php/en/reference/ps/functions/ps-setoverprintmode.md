---
id: "en-php-function-function-ps-setoverprintmode"
language: "php"
lang: "en"
category: "function"
name: "ps_setoverprintmode"
title: "Sets overprint mode"
signature: "bool ps_setoverprintmode(resource $psdoc, int $mode)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setoverprintmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets overprint mode

## Description

```php
bool ps_setoverprintmode(resource $psdoc, int $mode)
```

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$mode`**

## Return Values

Returns `true` on success or `false` on failure.
