---
id: "zh-php-function-function-memcache-debug"
language: "php"
lang: "zh"
category: "function"
name: "memcache_debug"
title: "打开/关闭调试输出"
signature: "bool memcache_debug(bool $on_off)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/function.memcache-debug.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开/关闭调试输出

## 说明

```php
bool memcache_debug(bool $on_off)
```

如果参数 `$on_off` 为 `true`，`memcache_debug()` 打开调试输出，如果为 `false`，则关闭调试输出。

> `memcache_debug()` 仅在 PHP 以 --enable-debug 选项编译时可以访问，并且在这种情况下始终返回 `true`，其他情况下此函数无效并始终返回 `false`。

## 参数

- **`$on_off`** — 如果为 `true`，则打开调试输出。如果为 `false` 则关闭调试输出。

## 返回值

当 PHP 以 --enalbe-debug 选项编译时返回 `true` 其他情况下返回 `false`。
