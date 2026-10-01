---
id: "en-php-function-function-zlib-encode"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "zlib_encode"
title: "Compress data with the specified encoding"
signature: "string|false zlib_encode(string $data, int $encoding, int $level = -1)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.zlib-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compress data with the specified encoding

## Description

```php
string|false zlib_encode(string $data, int $encoding, int $level = -1)
```

Compress data with the specified encoding.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$data`** — The data to compress.
- **`$encoding`** — The compression algorithm. Either `ZLIB_ENCODING_RAW`, `ZLIB_ENCODING_DEFLATE` or `ZLIB_ENCODING_GZIP`.
- **`$level`**

## Return Values

## Examples

**`zlib_encode()` example**

```php


<?php
$str = 'hello world';
$enc = zlib_encode($str, ZLIB_ENCODING_DEFLATE);
echo bin2hex($enc);
?>

   
```

The above example will output:

```text


789ccb48cdc9c95728cf2fca4901001a0b045d

   
```

## See Also

 `zlib_decode()`
