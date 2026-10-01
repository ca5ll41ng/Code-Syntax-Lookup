---
id: "en-php-function-swoole-runtime-set-hook-flags"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Runtime::setHookFlags"
title: "Set hook flags for coroutine"
signature: "public static bool Swoole\\Runtime::setHookFlags(int $flags)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-runtime.set-hook-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set hook flags for coroutine

## Description

```php
public static bool Swoole\Runtime::setHookFlags(int $flags)
```

Sets the hook flags for coroutine support. This dynamically changes the hook flags at runtime.

## Parameters

- **`$flags`** — Bitmask of flags specifying which functions to hook. Same flags as enableCoroutine.

## Return Values

Returns `true` on success or `false` on failure.
