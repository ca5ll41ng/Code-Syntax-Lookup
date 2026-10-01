---
id: "en-php-guide-zlib-examples"
language: "php"
lang: "en"
category: "guide"
name: "zlib.examples"
title: "Examples"
module: "zlib"
source_url: "https://www.php.net/manual/en/zlib.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

This example opens a temporary file and writes a test string to it, then it prints out the content of this file twice.

**Small Zlib Example**

```php


<?php

$filename = tempnam('/tmp', 'zlibtest') . '.gz';
echo "<html>\n<head></head>\n<body>\n<pre>\n";
$s = "Only a test, test, test, test, test, test, test, test!\n";

// open file for writing with maximum compression
$zp = gzopen($filename, "w9");

// write string to file
gzwrite($zp, $s);

// close file
gzclose($zp);

// open file for reading
$zp = gzopen($filename, "r");

// read 3 char
echo gzread($zp, 3);

// output until end of the file and close it.
gzpassthru($zp);
gzclose($zp);

echo "\n";

// open file and print content (the 2nd time).
if (readgzfile($filename) != strlen($s)) {
        echo "Error with zlib functions!";
}
unlink($filename);
echo "</pre>\n</body>\n</html>\n";

?>

  
```

**Working with the incremental compression and decompression API**

```php


<?php
// Perform GZIP compression:
$deflateContext = deflate_init(ZLIB_ENCODING_GZIP);
$compressed = deflate_add($deflateContext, "Data to compress", ZLIB_NO_FLUSH);
$compressed .= deflate_add($deflateContext, ", more data", ZLIB_NO_FLUSH);
$compressed .= deflate_add($deflateContext, ", and even more data!", ZLIB_FINISH);

// Perform GZIP decompression:
$inflateContext = inflate_init(ZLIB_ENCODING_GZIP);
$uncompressed = inflate_add($inflateContext, $compressed, ZLIB_NO_FLUSH);
$uncompressed .= inflate_add($inflateContext, NULL, ZLIB_FINISH);
echo $uncompressed;
?>

  
```

The above example will output:

```text


Data to compress, more data, and even more data!

  
```
