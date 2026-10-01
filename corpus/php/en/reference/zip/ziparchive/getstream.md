---
id: "en-php-function-ziparchive-getstream"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getStream"
title: "Get a file handler to the entry defined by its name (read only)"
signature: "public resource|false ZipArchive::getStream(string $name)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a file handler to the entry defined by its name (read only)

## Description

```php
public resource|false ZipArchive::getStream(string $name)
```

Get a file handler to the entry defined by its name. For now, it only supports read operations.

## Parameters

- **`$name`** — The name of the entry to use.

## Return Values

Returns a file pointer (resource) on success or `false` on failure.

## Examples

**Get the entry contents with `fread()` and store it**

```php


<?php
$contents = '';
$z = new ZipArchive();
if ($z->open('test.zip')) {
    $fp = $z->getStream('test');
    if(!$fp) exit("failed\n");

    while (!feof($fp)) {
        $contents .= fread($fp, 2);
    }

    fclose($fp);
    file_put_contents('t',$contents);
    echo "done.\n";
}
?>

     
```

**Same as the previous example but with `fopen()` and the zip stream wrapper**

```php


<?php
$contents = '';
$fp = fopen('zip://' . dirname(__FILE__) . '/test.zip#test', 'r');
if (!$fp) {
    exit("cannot open\n");
}
while (!feof($fp)) {
    $contents .= fread($fp, 2);
}
echo "$contents\n";
fclose($fp);
echo "done.\n";
?>

     
```

**Stream wrapper and image, can be used with the xml function as well**

```php


<?php
$im = imagecreatefromgif('zip://' . dirname(__FILE__) . '/test_im.zip#pear_item.gif');
imagepng($im, 'a.png');
?>

     
```

## See Also

`ZipArchive::getStreamIndex()` `ZipArchive::getStreamName()` Compression Streams
