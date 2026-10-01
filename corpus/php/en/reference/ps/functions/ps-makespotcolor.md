---
id: "en-php-function-function-ps-makespotcolor"
language: "php"
lang: "en"
category: "function"
name: "ps_makespotcolor"
title: "Create spot color"
signature: "int ps_makespotcolor(resource $psdoc, string $name, int $reserved = 0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-makespotcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create spot color

## Description

```php
int ps_makespotcolor(resource $psdoc, string $name, int $reserved = 0)
```

Creates a spot color from the current fill color. The fill color must be defined in rgb, cmyk or gray colorspace. The spot color name can be an arbitrary name. A spot color can be set as any color with `ps_setcolor()`. When the document is not printed but displayed by an postscript viewer the given color in the specified color space is use.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$name`** — Name of the spot color, e.g. Pantone 5565.

## Return Values

The id of the new spot color or 0 in case of an error.

## Examples

**Creating and using a spot color**

```php


<?php
$ps = ps_new();
if (!ps_open_file($ps, "spotcolor.ps")) {
  print "Cannot open PostScript file\n";
  exit;
}

ps_set_info($ps, "Creator", "spotcolor.php");
ps_set_info($ps, "Author", "Uwe Steinmann");
ps_set_info($ps, "Title", "Spot color example");

ps_begin_page($ps, 596, 842);
ps_setcolor($ps, "fill", "cmyk", 0.37, 0.0, 0.34, 0.34);
$spotcolor = ps_makespotcolor($ps, "PANTONE 5565 C", 0);
ps_setcolor($ps, "fill", "spot", $spotcolor, 0.5, 0.0, 0.0);
ps_moveto($ps, 100, 100);
ps_lineto($ps, 100, 200);
ps_lineto($ps, 200, 200);
ps_lineto($ps, 200, 100);
ps_lineto($ps, 100, 100);
ps_fill($ps);
ps_end_page($ps);

ps_delete($ps);
?>

    
```

This example creates the spot color "PANTONE 5565 C" which is a darker green (olive) and fills a rectangle with 50% intensity.

## See Also

`ps_setcolor()`
