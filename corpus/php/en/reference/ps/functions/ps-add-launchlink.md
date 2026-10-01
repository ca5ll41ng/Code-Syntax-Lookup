---
id: "en-php-function-function-ps-add-launchlink"
language: "php"
lang: "en"
category: "function"
name: "ps_add_launchlink"
title: "Adds link which launches file"
signature: "bool ps_add_launchlink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $filename)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-add-launchlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds link which launches file

## Description

```php
bool ps_add_launchlink(resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $filename)
```

Places a hyperlink at the given position pointing to a file program which is being started when clicked on. The hyperlink's source position is a rectangle with its lower left corner at (llx, lly) and its upper right corner at (urx, ury). The rectangle has by default a thin blue border.

The note will not be visible if the document is printed or viewed but it will show up if the document is converted to pdf by either Acrobat Distiller™ or Ghostview.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$llx`** — The x-coordinate of the lower left corner.
- **`$lly`** — The y-coordinate of the lower left corner.
- **`$urx`** — The x-coordinate of the upper right corner.
- **`$ury`** — The y-coordinate of the upper right corner.
- **`$filename`** — The path of the program to be started, when the link is clicked on.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_add_locallink()` `ps_add_pdflink()` `ps_add_weblink()`
