---
id: "en-php-function-gmagick-setcompressionquality"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setCompressionQuality"
title: "Sets the object's default compression quality"
signature: "Gmagick Gmagick::setCompressionQuality(int $quality)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setcompressionquality.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the object's default compression quality

## Description

```php
Gmagick Gmagick::setCompressionQuality(int $quality)
```

Sets the object's default compression quality.

## Parameters

- **`$quality`** — The GraphicsMagick default value is 75.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.

 Not sure if the ChangeLog entries are useful in this case or not, so leaving the block commented out. <refsect1 role="changelog"> <title>Changelog</title> <informaltable> <tgroup cols="2"> <thead> <row> <entry></entry> <entry></entry> </row> </thead> <tbody> <row> <entry>Enter the version of change here</entry> <entry> Describe the change </entry> </row> </tbody> </tgroup> </informaltable> </refsect1> 

## Examples

**`Gmagick::setCompressionQuality()`**

```php

     
<?php
$gm = new Gmagick();
$gm->read("magick:rose");
$gm->setCompressionQuality(2);
?>

     
```
