---
id: "zh-php-function-function-fann-get-train-error-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_train_error_function"
title: "返回训练中使用的错误函数。"
signature: "int fann_get_train_error_function(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-train-error-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练中使用的错误函数。

## 说明

```php
int fann_get_train_error_function(resource $ann)
```

返回训练中使用的错误函数。

有关于错误函数的详细描述，参见 error functions 静态变量。

默认的错误函数是 `FANN_ERRORFUNC_TANH`.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回 error function 静态变量, 错误则返回 `false` .

## 参见

`fann_set_train_error_function()`
