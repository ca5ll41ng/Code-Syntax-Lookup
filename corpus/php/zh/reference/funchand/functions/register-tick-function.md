---
id: "zh-php-function-function-register-tick-function"
language: "php"
lang: "zh"
category: "function"
name: "register_tick_function"
title: "注册一个函数以便在每个 tick 上执行"
signature: "bool register_tick_function(callable $callback, mixed $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.register-tick-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册一个函数以便在每个 tick 上执行

## 说明

```php
bool register_tick_function(callable $callback, mixed $args)
```

注册给定的 `$callback`，以便在 tick 被调用时执行。

## 参数

- **`$callback`** — 需要注册的函数。
- **`$args`**

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`register_tick_function()` 示例**

```php


<?php
declare(ticks=1);

function my_tick_function($param) {
    echo "Tick callback function called with param: $param\n";
}

register_tick_function('my_tick_function', true);
?>

    
```

## 参见

declare `unregister_tick_function()`
