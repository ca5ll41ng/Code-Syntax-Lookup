---
id: "en-php-function-function-stream-supports-lock"
language: "php"
lang: "en"
category: "function"
name: "stream_supports_lock"
title: "Tells whether the stream supports locking"
signature: "bool stream_supports_lock(resource $stream)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-supports-lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells whether the stream supports locking

## Description

```php
bool stream_supports_lock(resource $stream)
```

Tells whether the stream supports locking through `flock()`.

## Parameters

 {{{ 

- **`$stream`** — The stream to check.

 }}} 

## Return Values

 {{{ 

Returns `true` on success or `false` on failure.

 }}} 

## See Also

 {{{ 

`flock()`

 }}}
