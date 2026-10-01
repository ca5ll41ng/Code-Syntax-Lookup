---
id: "zh-php-function-function-mcrypt-generic-deinit"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_generic_deinit"
title: "对加密模块进行清理工作"
signature: "bool mcrypt_generic_deinit(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-generic-deinit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对加密模块进行清理工作

## 说明

```php
bool mcrypt_generic_deinit(resource $td)
```

本函数终止由加密描述符（`$td`）指定的加密模块， 它会清理缓冲区，但是并不关闭模块。 要想关闭加密模块， 你需要自行调用 `mcrypt_module_close()` 函数。 （但是 PHP 会在脚本末尾为你关闭已打开的加密模块）

## 参数

- **`$td`** — 加密描述符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `mcrypt_module_open()` `mcrypt_generic_init()`
