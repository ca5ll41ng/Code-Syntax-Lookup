---
id: "zh-php-function-function-fann-get-train-stop-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_train_stop_function"
title: "返回训练中使用的停止函数。"
signature: "int fann_get_train_stop_function(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-train-stop-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练中使用的停止函数。

## 说明

```php
int fann_get_train_stop_function(resource $ann)
```

返回训练中使用的停止函数。

停止函数的详细描述，参见stop functions 常量。

默认的停止函数是 `FANN_STOPFUNC_MSE`.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回 stop function 常量, 错误则返回 `false` .

## 参见

`fann_set_train_stop_function()`
