---
id: "en-php-function-function-swoole-async-readfile"
language: "php"
lang: "en"
category: "function"
name: "swoole_async_readfile"
title: "Read a file asynchronously"
signature: "bool swoole_async_readfile(string $filename, callable $callback)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-async-readfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read a file asynchronously

## Description

```php
bool swoole_async_readfile(string $filename, callable $callback)
```

## Parameters

- **`$filename`** — The filename of the file being read.
- **`$callback`**
  ```php
  mixed {callback}(string $filename, string $content)
  ```


  - **`$filename`** — The name of the file.
  - **`$content`** — The content read from the file.



## Return Values

Returns `true` on success or `false` on failure.
