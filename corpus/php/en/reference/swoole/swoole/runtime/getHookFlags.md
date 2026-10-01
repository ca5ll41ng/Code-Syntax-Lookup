---
id: "en-php-function-swoole-runtime-get-hook-flags"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Runtime::getHookFlags"
title: "Get current hook flags"
signature: "public static int Swoole\\Runtime::getHookFlags()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-runtime.get-hook-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current hook flags

## Description

```php
public static int Swoole\Runtime::getHookFlags()
```

Gets the current hook flags. Note that the returned flags might differ from what was set if some hooks failed.

## Parameters

This function has no parameters.

## Return Values

Returns the current hook flags as a bitmask.
