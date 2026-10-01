---
id: "en-php-function-function-stream-wrapper-restore"
language: "php"
lang: "en"
category: "function"
name: "stream_wrapper_restore"
title: "Restores a previously unregistered built-in wrapper"
signature: "bool stream_wrapper_restore(string $protocol)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-wrapper-restore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Restores a previously unregistered built-in wrapper

## Description

```php
bool stream_wrapper_restore(string $protocol)
```

Restores a built-in wrapper previously unregistered with `stream_wrapper_unregister()`.

## Parameters

- **`$protocol`**

## Return Values

Returns `true` on success or `false` on failure.
