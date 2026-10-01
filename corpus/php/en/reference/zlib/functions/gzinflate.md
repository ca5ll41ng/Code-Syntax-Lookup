---
id: "en-php-function-function-gzinflate"
language: "php"
lang: "en"
category: "function"
name: "gzinflate"
title: "Inflate a deflated string"
signature: "string|false gzinflate(string $data, int $max_length = 0)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzinflate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inflate a deflated string

## Description

```php
string|false gzinflate(string $data, int $max_length = 0)
```

This function inflates a deflated string.

## Parameters

- **`$data`** — The data compressed by `gzdeflate()`.
- **`$max_length`** — The maximum length of decoded data.

## Return Values

The original uncompressed data or `false` on error.

The function will return an error if the uncompressed data is more than 32768 times the length of the compressed input `$data` or, unless `$max_length` is `0`, more than the optional parameter `$max_length`.

## Examples

**`gzinflate()` example**

```php


<?php
$compressed   = gzdeflate('Compress me', 9);
$uncompressed = gzinflate($compressed);
echo $uncompressed;
?>

    
```

## See Also

`gzdeflate()` `gzcompress()` `gzuncompress()` `gzencode()`
