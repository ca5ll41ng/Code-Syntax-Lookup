---
id: "zh-php-function-function-fann-set-activation-function-layer"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_function_layer"
title: "为已应用的层中所有的神经元设置激活函数"
signature: "bool fann_set_activation_function_layer(resource $ann, int $activation_function, int $layer)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-function-layer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为已应用的层中所有的神经元设置激活函数

## 说明

```php
bool fann_set_activation_function_layer(resource $ann, int $activation_function, int $layer)
```

为层数为 `layer` 的所有神经元设置激活函数，将输入层计为0.

在输入层中为神经元设置激活函数是不可能的。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_function`** — 激活函数 常量。
- **`$layer`** — 层数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_function()` `fann_set_activation_function_hidden()` `fann_set_activation_function_output()` `fann_set_activation_steepness()`
