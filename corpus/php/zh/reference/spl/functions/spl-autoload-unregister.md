---
id: "zh-php-function-function-spl-autoload-unregister"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload_unregister"
title: "注销已实现的 __autoload() 函数"
signature: "bool spl_autoload_unregister(callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload-unregister.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注销已实现的 __autoload() 函数

## 说明

```php
bool spl_autoload_unregister(callable $callback)
```

从自动装载函数队列中移除函数。如果该函数队列处于激活状态且在指定函数移除后为空，则函数队列将会失效。

如果该函数导致自动装载函数队列失效，之前存在的 __autoload 函数也不会重新激活。

## 参数

- **`$callback`** — 要注销的自动装载函数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
