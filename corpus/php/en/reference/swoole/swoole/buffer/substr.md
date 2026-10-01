---
id: "en-php-function-swoole-buffer-substr"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Buffer::substr"
title: "Read data from the memory buffer based on offset and length. Or remove data from the memory buffer."
signature: "public string Swoole\\Buffer::substr(int $offset, [int $length = ...], [bool $remove = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-buffer.substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from the memory buffer based on offset and length. Or remove data from the memory buffer.

## Description

```php
public string Swoole\Buffer::substr(int $offset, [int $length = ...], [bool $remove = ...])
```

If $remove is set to be true and $offset is set to be 0, the data will be removed from the buffer. The memory for storing the data will be released when the buffer object is deconstructed.

## Parameters

- **`$offset`** — The offset.
- **`$length`** — The length.
- **`$remove`** — Whether to remove the data from the memory buffer.

## Return Values

The data or string read from the memory buffer.
