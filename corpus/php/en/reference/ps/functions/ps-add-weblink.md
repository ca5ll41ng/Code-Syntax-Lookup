---
id: "en-php-function-function-ps-add-weblink"
language: "php"
lang: "en"
category: "function"
name: "ps_add_weblink"
title: "Adds link to a web location"
signature: "bool ps_add_weblink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $url)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-add-weblink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds link to a web location

## Description

```php
bool ps_add_weblink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $url)
```

Places a hyperlink at the given position pointing to a web page. The hyperlink's source position is a rectangle with its lower left corner at (`$llx`, `$lly`) and its upper right corner at (`$urx`, `$ury`). The rectangle has by default a thin blue border.

The note will not be visible if the document is printed or viewed but it will show up if the document is converted to pdf by either Acrobat Distiller™ or Ghostview.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$llx`** — The x-coordinate of the lower left corner.
- **`$lly`** — The y-coordinate of the lower left corner.
- **`$urx`** — The x-coordinate of the upper right corner.
- **`$ury`** — The y-coordinate of the upper right corner.
- **`$url`** — The url of the hyperlink to be opened when clicking on this link, e.g. `http://www.php.net`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_add_launchlink()` `ps_add_locallink()` `ps_add_pdflink()`
