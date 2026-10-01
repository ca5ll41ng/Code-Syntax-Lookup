---
id: "zh-php-function-function-fann-set-activation-steepness-hidden"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_steepness_hidden"
title: "为所有隐藏层中所有的神经元设置激活函数陡度"
signature: "bool fann_set_activation_steepness_hidden(resource $ann, float $activation_steepness)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-steepness-hidden.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为所有隐藏层中所有的神经元设置激活函数陡度

## 说明

```php
bool fann_set_activation_steepness_hidden(resource $ann, float $activation_steepness)
```

为所有隐藏层中所有的神经元设置激活陡度。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_steepness`** — 激活陡度。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_steepness()` `fann_set_activation_steepness_layer()` `fann_set_activation_steepness_output()` `fann_get_activation_steepness()` `fann_set_activation_function()`
