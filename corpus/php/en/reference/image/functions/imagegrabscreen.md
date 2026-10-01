---
id: "en-php-function-function-imagegrabscreen"
language: "php"
lang: "en"
category: "function"
name: "imagegrabscreen"
title: "Captures the whole screen"
signature: "GdImage|false imagegrabscreen()"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagegrabscreen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Captures the whole screen

## Description

```php
GdImage|false imagegrabscreen()
```

Grabs a screenshot of the whole screen.

> This function is only available on Windows.

## Parameters

This function has no parameters.

## Return Values

Returns an image object on success, `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |

 <refsect1 role="errors"> <title>Errors/Exceptions</title> <para> This function issues no errors. </para> </refsect1> 

## Examples

**`imagegrabscreen()` example**

This example demonstrates how to take a screenshot of the current screen and save it as a png image.

```php


<?php
$im = imagegrabscreen();
imagepng($im, "myscreenshot.png");
?>

    
```

## See Also

 `imagegrabwindow()`
