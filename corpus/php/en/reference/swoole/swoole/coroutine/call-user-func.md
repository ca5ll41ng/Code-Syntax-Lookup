---
id: "en-php-function-swoole-coroutine-call-user-func"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Coroutine::call_user_func"
title: "Call a callback given by the first parameter"
signature: "public static mixed Swoole\\Coroutine::call_user_func(callable $callback, mixed $args)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-coroutine.call-user-func.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Call a callback given by the first parameter

## Description

```php
public static mixed Swoole\Coroutine::call_user_func(callable $callback, mixed $args)
```

Calls the `$callback` given by the first parameter and passes the remaining parameters as arguments.

## Parameters

- **`$callback`** — The `callable` to be called.
- **`$args`** — Zero or more parameters to be passed to the callback.

## Return Values
