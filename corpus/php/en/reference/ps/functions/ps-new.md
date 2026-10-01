---
id: "en-php-function-function-ps-new"
language: "php"
lang: "en"
category: "function"
name: "ps_new"
title: "Creates a new PostScript document object"
signature: "resource|false ps_new()"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new PostScript document object

## Description

```php
resource|false ps_new()
```

Creates a new document instance. It does not create the file on disk or in memory, it just sets up everything. `ps_new()` is usually followed by a call of `ps_open_file()` to actually create the postscript document.

## Parameters

This function has no parameters.

## Return Values

Resource of PostScript document or `false` on failure. The return value is passed to all other functions as the first argument.

## See Also

`ps_delete()`
