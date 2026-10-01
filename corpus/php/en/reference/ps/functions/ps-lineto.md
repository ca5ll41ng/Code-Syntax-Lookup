---
id: "en-php-function-function-ps-lineto"
language: "php"
lang: "en"
category: "function"
name: "ps_lineto"
title: "Draws a line"
signature: "bool ps_lineto(resource $psdoc, float $x, float $y)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-lineto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a line

## Description

```php
bool ps_lineto(resource $psdoc, float $x, float $y)
```

Adds a straight line from the current point to the given coordinates to the current path. Use `ps_moveto()` to set the starting point of the line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — x-coordinate of the end point of the line.
- **`$y`** — y-coordinate of the end point of the line.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Drawing a rectangle**

```php


<?php
$ps = ps_new();
if (!ps_open_file($ps, "rectangle.ps")) {
  print "Cannot open PostScript file\n";
  exit;
}

ps_set_info($ps, "Creator", "rectangle.php");
ps_set_info($ps, "Author", "Uwe Steinmann");
ps_set_info($ps, "Title", "Lineto example");

ps_begin_page($ps, 596, 842);
ps_moveto($ps, 100, 100);
ps_lineto($ps, 100, 200);
ps_lineto($ps, 200, 200);
ps_lineto($ps, 200, 100);
ps_lineto($ps, 100, 100);
ps_stroke($ps);
ps_end_page($ps);

ps_delete($ps);
?>

    
```

## See Also

`ps_moveto()`
