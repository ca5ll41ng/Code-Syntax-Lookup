---
id: "en-php-function-imagick-identifyformat"
language: "php"
lang: "en"
category: "function"
name: "Imagick::identifyFormat"
title: "Formats a string with image details"
signature: "public string|false Imagick::identifyFormat(string $embedText)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.identifyformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Formats a string with image details

## Description

```php
public string|false Imagick::identifyFormat(string $embedText)
```

Replaces any embedded formatting characters with the appropriate image property and returns the interpreted text. See http://www.imagemagick.org/script/escape.php for escape sequences.

## Parameters

- **`$embedText`** — A string containing formatting sequences e.g. "Trim box: %@ number of unique colors: %k".

## Return Values

Returns format or `false` on failure.

## Examples

**`Imagick::identifyFormat()`**

```php

      
<?php
        $output = "Output of 'Trim box: %@ number of unique colors: %k' is: <br/>";
        $imagick = new \Imagick(realpath("./images/artifact/mask.png"));
        $output .= $imagick->identifyFormat("Trim box: %@ number of unique colors: %k");

?>

      
```
