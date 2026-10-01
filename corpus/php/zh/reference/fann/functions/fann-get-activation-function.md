---
id: "zh-php-function-function-fann-get-activation-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_activation_function"
title: "返回激励函数"
signature: "int fann_get_activation_function(resource $ann, int $layer, int $neuron)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-activation-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回激励函数

## 说明

```php
int fann_get_activation_function(resource $ann, int $layer, int $neuron)
```

获取在层数为 `layer` 的网络中神经元数为 `neuron`的激励函数，输入层被计为 0.

在输入层是不能获取神经元激励函数的。

返回值将会是激励函数 常量之一。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$layer`** — 层数。
- **`$neuron`** — 神经元数

## 返回值

学习函数 常量或者如果神经未在神经网络中定义返回 -1， 错误则返回 `false` .

## 参见

`fann_set_activation_function_layer()` `fann_set_activation_function_hidden()` `fann_set_activation_function_output()` `fann_set_activation_steepness()` `fann_set_activation_function()`
