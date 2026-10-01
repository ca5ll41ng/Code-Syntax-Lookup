---
id: "zh-php-function-function-unregister-tick-function"
language: "php"
lang: "zh"
category: "function"
name: "unregister_tick_function"
title: "注销每个 tick 上需要执行的函数"
signature: "void unregister_tick_function(callable $callback)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.unregister-tick-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注销每个 tick 上需要执行的函数

## 说明

```php
void unregister_tick_function(callable $callback)
```

注销函数 `$callback`，以便在调用 tick 时不再执行。

## 参数

- **`$callback`** — 要注销的函数。

## 返回值

没有返回值。

## 参见

`register_tick_function()`
