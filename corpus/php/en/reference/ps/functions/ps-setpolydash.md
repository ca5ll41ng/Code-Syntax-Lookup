---
id: "en-php-function-function-ps-setpolydash"
language: "php"
lang: "en"
category: "function"
name: "ps_setpolydash"
title: "Sets appearance of a dashed line"
signature: "bool ps_setpolydash(resource $psdoc, float $arr)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setpolydash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets appearance of a dashed line

## Description

```php
bool ps_setpolydash(resource $psdoc, float $arr)
```

Sets the length of the black and white portions of a dashed line. `ps_setpolydash()` is used to set more complicated dash patterns.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$arr`** — `$arr` is a list of length elements alternately for the black and white portion.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Drawing a dashed line**

```php


<?php
$ps = ps_new();
if (!ps_open_file($ps, "polydash.ps")) {
   print "Cannot open PostScript file\n";
     exit;
}

ps_set_info($ps, "Creator", "polydash.php");
ps_set_info($ps, "Author", "Uwe Steinmann");
ps_set_info($ps, "Title", "Poly dash example");

ps_begin_page($ps, 596, 842);
ps_setpolydash($ps, array(10, 5, 2, 5));
ps_moveto($ps, 100, 100);
ps_lineto($ps, 200, 200);
ps_stroke($ps);
ps_end_page($ps);

ps_delete($ps);
?>

    
```

This example draws a line with a 10 and 2 points long line, and gaps of 5 points inbetween.

## See Also

`ps_setdash()`
