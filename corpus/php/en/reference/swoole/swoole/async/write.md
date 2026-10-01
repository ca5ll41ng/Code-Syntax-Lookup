---
id: "en-php-function-swoole-async-write"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Async::write"
title: "Write data to a file stream asynchronously."
signature: "public static void Swoole\\Async::write(string $filename, string $content, [int $offset = ...], [callable $callback = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-async.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write data to a file stream asynchronously.

## Description

```php
public static void Swoole\Async::write(string $filename, string $content, [int $offset = ...], [callable $callback = ...])
```

## Parameters

- **`$filename`** — The filename being written.
- **`$content`** — The content writing to the file.
- **`$offset`** — The offset.
- **`$callback`**
