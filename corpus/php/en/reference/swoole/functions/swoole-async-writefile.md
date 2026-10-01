---
id: "en-php-function-function-swoole-async-writefile"
language: "php"
lang: "en"
category: "function"
name: "swoole_async_writefile"
title: "Write data to a file asynchronously"
signature: "bool swoole_async_writefile(string $filename, string $content, [callable $callback = ...], int $flags = 0)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-async-writefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write data to a file asynchronously

## Description

```php
bool swoole_async_writefile(string $filename, string $content, [callable $callback = ...], int $flags = 0)
```

## Parameters

- **`$filename`** — The filename being written.
- **`$content`** — The content writing to the file.
- **`$callback`**
- **`$flags`**

## Return Values

Returns `true` on success or `false` on failure.
