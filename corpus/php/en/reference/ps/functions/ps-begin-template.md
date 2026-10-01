---
id: "en-php-function-function-ps-begin-template"
language: "php"
lang: "en"
category: "function"
name: "ps_begin_template"
title: "Start a new template"
signature: "int ps_begin_template(resource $psdoc, float $width, float $height)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-begin-template.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Start a new template

## Description

```php
int ps_begin_template(resource $psdoc, float $width, float $height)
```

Starts a new template. A template is called a form in the postscript language. It is created similar to a pattern but used like an image. Templates are often used for drawings which are placed several times through out the document, e.g. like a company logo. All drawing functions may be used within a template. The template will not be drawn until it is placed by `ps_place_image()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$width`** — The width of the template in pixel.
- **`$height`** — The height of the template in pixel.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Creating and using a template**

```php


<?php
$ps = ps_new();

if (!ps_open_file($ps, "template.ps")) {
  print "Cannot open PostScript file\n";
  exit;
}

ps_set_parameter($ps, "warning", "true");
ps_set_info($ps, "Creator", "template.php");
ps_set_info($ps, "Author", "Uwe Steinmann");
ps_set_info($ps, "Title", "Template example");

$pstemplate = ps_begin_template($ps, 30.0, 30.0);
ps_moveto($ps, 0, 0);
ps_lineto($ps, 30, 30);
ps_moveto($ps, 0, 30);
ps_lineto($ps, 30, 0);
ps_stroke($ps);
ps_end_template($ps);

ps_begin_page($ps, 596, 842);
ps_place_image($ps, $pstemplate, 20.0, 20.0, 1.0);
ps_place_image($ps, $pstemplate, 50.0, 30.0, 0.5);
ps_place_image($ps, $pstemplate, 70.0, 70.0, 0.6);
ps_place_image($ps, $pstemplate, 30.0, 50.0, 1.3);
ps_end_page($ps);

ps_close($ps);
ps_delete($ps);
?>

    
```

## See Also

`ps_end_template()`
