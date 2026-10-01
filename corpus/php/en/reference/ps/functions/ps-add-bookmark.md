---
id: "en-php-function-function-ps-add-bookmark"
language: "php"
lang: "en"
category: "function"
name: "ps_add_bookmark"
title: "Add bookmark to current page"
signature: "int ps_add_bookmark(resource $psdoc, string $text, int $parent = 0, int $open = 0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-add-bookmark.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add bookmark to current page

## Description

```php
int ps_add_bookmark(resource $psdoc, string $text, int $parent = 0, int $open = 0)
```

Adds a bookmark for the current page. Bookmarks usually appear in PDF-Viewers left of the page in a hierarchical tree. Clicking on a bookmark will jump to the given page.

The note will not be visible if the document is printed or viewed but it will show up if the document is converted to pdf by either Acrobat Distiller™ or Ghostview.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text used for displaying the bookmark.
- **`$parent`** — A bookmark previously created by this function which is used as the parent of the new bookmark.
- **`$open`** — If `$open` is unequal to zero the bookmark will be shown open by the pdf viewer.

## Return Values

The returned value is a reference for the bookmark. It is only used if the bookmark shall be used as a parent. The value is greater zero if the function succeeds. In case of an error zero will be returned.

## See Also

`ps_add_launchlink()` `ps_add_pdflink()` `ps_add_weblink()`
