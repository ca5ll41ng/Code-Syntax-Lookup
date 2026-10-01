---
id: "en-php-function-function-stream-wrapper-unregister"
language: "php"
lang: "en"
category: "function"
name: "stream_wrapper_unregister"
title: "Unregister a URL wrapper"
signature: "bool stream_wrapper_unregister(string $protocol)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-wrapper-unregister.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregister a URL wrapper

## Description

```php
bool stream_wrapper_unregister(string $protocol)
```

Allows you to disable an already defined stream wrapper. Once the wrapper has been disabled you may override it with a user-defined wrapper using `stream_wrapper_register()` or re-enable it later on with `stream_wrapper_restore()`.

## Parameters

- **`$protocol`**

## Return Values

Returns `true` on success or `false` on failure.
