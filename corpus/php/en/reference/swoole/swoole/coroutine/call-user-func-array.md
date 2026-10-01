---
id: "en-php-function-swoole-coroutine-call-user-func-array"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Coroutine::call_user_func_array"
title: "Call a callback with an array of parameters"
signature: "public static mixed Swoole\\Coroutine::call_user_func_array(callable $callback, array $param_array)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-coroutine.call-user-func-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Call a callback with an array of parameters

## Description

```php
public static mixed Swoole\Coroutine::call_user_func_array(callable $callback, array $param_array)
```

Calls the callback given by the first parameter with the parameters in param_array.

## Parameters

- **`$callback`** — The `callable` to be called.
- **`$param_array`** — Zero or more parameters in the array to be passed to the callback.

## Return Values
