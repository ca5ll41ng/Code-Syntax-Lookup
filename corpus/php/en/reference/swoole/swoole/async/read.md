---
id: "en-php-function-swoole-async-read"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Async::read"
title: "Read file stream asynchronously."
signature: "public static bool Swoole\\Async::read(string $filename, callable $callback, [int $chunk_size = ...], [int $offset = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-async.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read file stream asynchronously.

## Description

```php
public static bool Swoole\Async::read(string $filename, callable $callback, [int $chunk_size = ...], [int $offset = ...])
```

## Parameters

- **`$filename`** — The name of the file.
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
