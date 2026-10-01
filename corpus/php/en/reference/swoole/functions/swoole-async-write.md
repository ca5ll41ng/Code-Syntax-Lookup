---
id: "en-php-function-function-swoole-async-write"
language: "php"
lang: "en"
category: "function"
name: "swoole_async_write"
title: "Write data to a file stream asynchronously"
signature: "bool swoole_async_write(string $filename, string $content, [int $offset = ...], [callable $callback = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-async-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write data to a file stream asynchronously

## Description

```php
bool swoole_async_write(string $filename, string $content, [int $offset = ...], [callable $callback = ...])
```

## Parameters

- **`$filename`** — The filename being written.
- **`$content`** — The content writing to the file.
- **`$offset`** — The offset.
- **`$callback`**

## Return Values

Returns `true` on success or `false` on failure.
