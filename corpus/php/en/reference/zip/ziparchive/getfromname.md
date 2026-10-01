---
id: "en-php-function-ziparchive-getfromname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getFromName"
title: "Returns the entry contents using its name"
signature: "public string|false ZipArchive::getFromName(string $name, int $len = 0, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getfromname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the entry contents using its name

## Description

```php
public string|false ZipArchive::getFromName(string $name, int $len = 0, int $flags = 0)
```

Returns the entry contents using its name.

## Parameters

- **`$name`** — Name of the entry
- **`$len`** — The length to be read from the entry. If `0`, then the entire entry is read.
- **`$flags`** — The flags to use to find the entry. The following values may be ORed. - `ZipArchive::FL_UNCHANGED` - `ZipArchive::FL_COMPRESSED` - `ZipArchive::FL_NOCASE`

## Return Values

Returns the contents of the entry on success or `false` on failure.

## Examples

**Get the file contents**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test1.zip') === TRUE) {
    echo $zip->getFromName('testfromfile.php');
    $zip->close();
} else {
    echo 'failed';
}
?>

     
```

**Convert an image from a zip entry**

```php


<?php
$z = new ZipArchive();
if ($z->open(dirname(__FILE__) . '/test_im.zip')) {
    $im_string = $z->getFromName("pear_item.gif");
    $im = imagecreatefromstring($im_string);
    imagepng($im, 'b.png');
}
?>

     
```

## See Also

`ZipArchive::getFromIndex()`
