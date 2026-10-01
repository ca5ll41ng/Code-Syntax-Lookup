---
id: "en-php-function-function-ps-end-page"
language: "php"
lang: "en"
category: "function"
name: "ps_end_page"
title: "End a page"
signature: "bool ps_end_page(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-end-page.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End a page

## Description

```php
bool ps_end_page(resource $psdoc)
```

Ends a page which was started with `ps_begin_page()`. Ending a page will leave the current drawing context, which e.g. requires to reload fonts if they were loading within the page, and to set many other drawing parameters like the line width, or color.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_begin_page()`
