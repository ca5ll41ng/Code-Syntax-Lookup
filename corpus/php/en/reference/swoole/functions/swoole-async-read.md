---
id: "en-php-function-function-swoole-async-read"
language: "php"
lang: "en"
category: "function"
name: "swoole_async_read"
title: "Read file stream asynchronously"
signature: "bool swoole_async_read(string $filename, callable $callback, int $chunk_size = 65536, int $offset = 0)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-async-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read file stream asynchronously

## Description

```php
bool swoole_async_read(string $filename, callable $callback, int $chunk_size = 65536, int $offset = 0)
```

## Parameters

- **`$filename`** — The filename of the file being read.
- **`$callback`**
  ```php
  mixed {callback}(string $filename, string $content)
  ```


  - **`$filename`** — The name of the file.
  - **`$content`** — The content read from the file stream.


- **`$chunk_size`** — The chunk length.
- **`$offset`** — The offset.

## Return Values

Whether the read is succeed.
