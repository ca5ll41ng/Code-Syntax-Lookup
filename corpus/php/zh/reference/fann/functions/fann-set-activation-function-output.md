---
id: "zh-php-function-function-fann-set-activation-function-output"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_function_output"
title: "为输出层设置激活函数"
signature: "bool fann_set_activation_function_output(resource $ann, int $activation_function)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-function-output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为输出层设置激活函数

## 说明

```php
bool fann_set_activation_function_output(resource $ann, int $activation_function)
```

为输出层设置激活函数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_function`** — 激活函数 常量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_function()` `fann_set_activation_function_layer()` `fann_set_activation_function_hidden()` `fann_set_activation_steepness()`
