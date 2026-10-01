---
id: "en-php-function-imagick-queryfonts"
language: "php"
lang: "en"
category: "function"
name: "Imagick::queryFonts"
title: "Returns the configured fonts"
signature: "public static array Imagick::queryFonts(string $pattern = \"*\")"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.queryfonts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the configured fonts

## Description

```php
public static array Imagick::queryFonts(string $pattern = "*")
```

Returns the configured fonts.

## Parameters

- **`$pattern`** — The query pattern

## Return Values

Returns an array containing the configured fonts.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::queryFonts()`**

```php

      
<?php
        $output = '';
        $output .= "Fonts that match 'Helvetica*' are:<br/>";

        $fontList = \Imagick::queryFonts("Helvetica*");
 
        foreach ($fontList as $fontName) {
            $output .= '<li>'. $fontName."</li>";
        }

        return $output;

?>

      
```
