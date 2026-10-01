---
id: "zh-php-function-function-spl-autoload-functions"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload_functions"
title: "返回所有已注册的 __autoload() 函数"
signature: "array spl_autoload_functions()"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload-functions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有已注册的 __autoload() 函数

## 说明

```php
array spl_autoload_functions()
```

获取所有已注册的 __autoload() 函数。

## 参数

此函数没有参数。

## 返回值

包含所有已注册的 __autoload 函数的 `array`。如果没有已注册的函数或者自动加载队列未激活，则返回值将是空数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 将更新返回值始终是 `array`；之前如果自动加载队列未激活，此函数返回 `false`。 |
