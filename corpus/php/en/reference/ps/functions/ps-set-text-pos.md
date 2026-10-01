---
id: "en-php-function-function-ps-set-text-pos"
language: "php"
lang: "en"
category: "function"
name: "ps_set_text_pos"
title: "Sets position for text output"
signature: "bool ps_set_text_pos(resource $psdoc, float $x, float $y)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-text-pos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets position for text output

## Description

```php
bool ps_set_text_pos(resource $psdoc, float $x, float $y)
```

Set the position for the next text output. You may alternatively set the x and y value separately by calling `ps_set_value()` and choosing `textx` respectively `texty` as the value name.

If you want to output text at a certain position it is more convenient to use `ps_show_xy()` instead of setting the text position and calling `ps_show()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — x-coordinate of the new text position.
- **`$y`** — y-coordinate of the new text position.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Placing text at a given position**

```php


<?php
$ps = ps_new();
if (!ps_open_file($ps, "text.ps")) {
  print "Cannot open PostScript file\n";
  exit;
}

ps_set_info($ps, "Creator", "rectangle.php");
ps_set_info($ps, "Author", "Uwe Steinmann");
ps_set_info($ps, "Title", "Text placement example");

ps_begin_page($ps, 596, 842);
$psfont = ps_findfont($ps, "Helvetica", "", 0);
ps_setfont($ps, $psfont, 8.0);
ps_show_xy($ps, "Some text at (100, 100)", 100, 100);

ps_set_value($ps, "textx", 100);
ps_set_value($ps, "texty", 120);
ps_show($ps, "Some text at (100, 120)");
ps_end_page($ps);

ps_delete($ps);
?>

    
```

## See Also

`ps_set_value()` `ps_show()`
