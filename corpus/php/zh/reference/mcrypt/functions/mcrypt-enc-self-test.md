---
id: "zh-php-function-function-mcrypt-enc-self-test"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_self_test"
title: "在打开的模块上进行自检"
signature: "int mcrypt_enc_self_test(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-self-test.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在打开的模块上进行自检

## 说明

```php
int mcrypt_enc_self_test(resource $td)
```

在 `$td` 指定的算法 上进行自检操作。

## 参数

- **`$td`** — 加密描述符。

## 返回值

自检成功返回 `0`，失败则返回一个小于零的`integer`。
