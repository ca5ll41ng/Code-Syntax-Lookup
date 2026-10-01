---
id: "en-php-function-function-lzf-compress"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "lzf_compress"
title: "LZF compression"
signature: "string lzf_compress(string $data)"
module: "lzf"
source_url: "https://www.php.net/manual/en/function.lzf-compress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# LZF compression

## Description

```php
string lzf_compress(string $data)
```

`lzf_compress()` compresses the given `$data` string using LZF encoding.

## Parameters

- **`$data`** — The string to compress.

## Return Values

Returns the compressed data or `false` if an error occurred.

## See Also

 `lzf_decompress()`
