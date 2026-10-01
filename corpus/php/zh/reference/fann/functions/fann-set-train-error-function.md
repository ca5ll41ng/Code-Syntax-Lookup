---
id: "zh-php-function-function-fann-set-train-error-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_train_error_function"
title: "设置训练期间使用的错误函数。"
signature: "bool fann_set_train_error_function(resource $ann, int $error_function)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-train-error-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置训练期间使用的错误函数。

## 说明

```php
bool fann_set_train_error_function(resource $ann, int $error_function)
```

设置训练期间使用的错误函数。

更多错误函数的信息，参见 error functions 常量.

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$error_function`** — error function 常量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_train_error_function()`
