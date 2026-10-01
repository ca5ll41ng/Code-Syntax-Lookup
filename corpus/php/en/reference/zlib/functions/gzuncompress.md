---
id: "en-php-function-function-gzuncompress"
language: "php"
lang: "en"
category: "function"
name: "gzuncompress"
title: "Uncompress a compressed string"
signature: "string|false gzuncompress(string $data, int $max_length = 0)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzuncompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Uncompress a compressed string

## Description

```php
string|false gzuncompress(string $data, int $max_length = 0)
```

This function uncompress a compressed string.

## Parameters

- **`$data`** — The data compressed by `gzcompress()`.
- **`$max_length`** — The maximum length of data to decode.

## Return Values

The original uncompressed data or `false` on error.

The function will return an error if the uncompressed data is more than 32768 times the length of the compressed input `$data` or more than the optional parameter `$max_length`.

## Examples

**`gzuncompress()` example**

```php


<?php
$compressed   = gzcompress('Compress me', 9);
$uncompressed = gzuncompress($compressed);
echo $uncompressed;
?>

    
```

## See Also

`gzcompress()` `gzinflate()` `gzdeflate()` `gzencode()`
