---
id: "en-php-function-imagick-queryfontmetrics"
language: "php"
lang: "en"
category: "function"
name: "Imagick::queryFontMetrics"
title: "Returns an array representing the font metrics"
signature: "public array Imagick::queryFontMetrics(ImagickDraw $properties, string $text, [bool $multiline = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.queryfontmetrics.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array representing the font metrics

## Description

```php
public array Imagick::queryFontMetrics(ImagickDraw $properties, string $text, [bool $multiline = ...])
```

Returns a multi-dimensional array representing the font metrics.

## Parameters

- **`$properties`** — ImagickDraw object containing font properties
- **`$text`** — The text
- **`$multiline`** — Multiline parameter. If left empty it is autodetected

## Return Values

Returns a multi-dimensional array representing the font metrics.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::queryFontMetrics()`:**

Query the metrics for the text and dump the results on the screen.

```php


<?php
/* Create a new Imagick object */
$im = new Imagick();

/* Create an ImagickDraw object */
$draw = new ImagickDraw();

/* Set the font */
$draw->setFont('/path/to/font.ttf');

/* Dump the font metrics, autodetect multiline */
var_dump($im->queryFontMetrics($draw, "Hello World!"));
?>

    
```
