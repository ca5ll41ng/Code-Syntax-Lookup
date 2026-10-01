---
id: "zh-php-function-function-fann-set-activation-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_function"
title: "为已应用的神经元和层设置激活函数"
signature: "bool fann_set_activation_function(resource $ann, int $activation_function, int $layer, int $neuron)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为已应用的神经元和层设置激活函数

## 说明

```php
bool fann_set_activation_function(resource $ann, int $activation_function, int $layer, int $neuron)
```

为层数为 `layer`，神经经元数为 `neuron` 的神经元设置激活函数，将输入层记为0.

在输出层中的神经元设置激活函数是不可能的。

在选择激活函数时，注意激活函数有不同的范围，这个很重要哦。 `FANN_SIGMOID` 就是个例子。它的范围是0 -1，然而 `FANN_SIGMOID_SYMMETRIC` 的范围是-1 - 1， `FANN_LINEAR` 却是无限的。

应用的激活函数应该是激活函数常量之一。

返回值是激活函数常量之一。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_function`** — 激活函数常量。
- **`$layer`** — 层数。
- **`$neuron`** — 神经元数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_function_layer()` `fann_set_activation_function_hidden()` `fann_set_activation_function_output()` `fann_set_activation_steepness()` `fann_get_activation_function()`
