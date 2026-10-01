---
id: "en-php-function-imagick-queryformats"
language: "php"
lang: "en"
category: "function"
name: "Imagick::queryFormats"
title: "Returns formats supported by Imagick"
signature: "public static array Imagick::queryFormats(string $pattern = \"*\")"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.queryformats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns formats supported by Imagick

## Description

```php
public static array Imagick::queryFormats(string $pattern = "*")
```

Returns formats supported by Imagick.

## Parameters

- **`$pattern`**

## Return Values

Returns an array containing the formats supported by Imagick.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::queryFormats()`**

```php

      
<?php
    function render() {
        $output = "";
        $input = \Imagick::queryformats();
        $columns = 6;

        $output .= "<table border='2'>";

        for ($i=0; $i < count($input); $i += $columns) {
            $output .= "<tr>";
            for ($c=0; $c<$columns; $c++) {
                $output .= "<td>";
                if (($i + $c) <  count($input)) {
                    $output .= $input[$i + $c];
                }
                $output .= "</td>";
            }
            $output .= "</tr>";
        }

        $output .= "</table>";

        return $output;
    }

?>

      
```
