---
id: "en-php-function-function-ps-add-locallink"
language: "php"
lang: "en"
category: "function"
name: "ps_add_locallink"
title: "Adds link to a page in the same document"
signature: "bool ps_add_locallink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, int $page, string $dest)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-add-locallink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds link to a page in the same document

## Description

```php
bool ps_add_locallink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, int $page, string $dest)
```

Places a hyperlink at the given position pointing to a page in the same document. Clicking on the link will jump to the given page. The first page in a document has number 1.

The hyperlink's source position is a rectangle with its lower left corner at (`$llx`, `$lly`) and its upper right corner at (`$urx`, `$ury`). The rectangle has by default a thin blue border.

The note will not be visible if the document is printed or viewed but it will show up if the document is converted to pdf by either Acrobat Distiller™ or Ghostview.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$llx`** — The x-coordinate of the lower left corner.
- **`$lly`** — The y-coordinate of the lower left corner.
- **`$urx`** — The x-coordinate of the upper right corner.
- **`$ury`** — The y-coordinate of the upper right corner.
- **`$page`** — The number of the page displayed when clicking on the link.
- **`$dest`** — The parameter `$dest` determines how the document is being viewed. It can be `fitpage`, `fitwidth`, `fitheight`, or `fitbbox`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_add_launchlink()` `ps_add_pdflink()` `ps_add_weblink()`
