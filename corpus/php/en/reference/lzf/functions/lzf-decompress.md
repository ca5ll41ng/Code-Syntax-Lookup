---
id: "en-php-function-function-lzf-decompress"
language: "php"
lang: "en"
category: "function"
name: "lzf_decompress"
title: "LZF decompression"
signature: "string lzf_decompress(string $data)"
module: "lzf"
source_url: "https://www.php.net/manual/en/function.lzf-decompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# LZF decompression

## Description

```php
string lzf_decompress(string $data)
```

`lzf_compress()` decompresses the given `$data` string containing lzf encoded data.

## Parameters

- **`$data`** — The compressed string.

## Return Values

Returns the decompressed data or `false` if an error occurred.

## See Also

 `lzf_compress()`
