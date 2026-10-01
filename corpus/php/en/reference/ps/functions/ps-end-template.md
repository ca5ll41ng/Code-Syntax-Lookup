---
id: "en-php-function-function-ps-end-template"
language: "php"
lang: "en"
category: "function"
name: "ps_end_template"
title: "End a template"
signature: "bool ps_end_template(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-end-template.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End a template

## Description

```php
bool ps_end_template(resource $psdoc)
```

Ends a template which was started with `ps_begin_template()`. Once a template has been ended, it can be used like an image.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_begin_template()`
