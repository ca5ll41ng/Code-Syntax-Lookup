---
id: "zh-php-function-function-mcrypt-module-close"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_close"
title: "关闭加密模块"
signature: "bool mcrypt_module_close(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭加密模块

## 说明

```php
bool mcrypt_module_close(resource $td)
```

关闭加密模块。

## 参数

- **`$td`** — 加密描述符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `mcrypt_module_open()`
