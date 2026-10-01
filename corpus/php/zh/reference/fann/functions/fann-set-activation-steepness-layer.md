---
id: "zh-php-function-function-fann-set-activation-steepness-layer"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_steepness_layer"
title: "为提供的层中所有的神经元设置激活陡度"
signature: "bool fann_set_activation_steepness_layer(resource $ann, float $activation_steepness, int $layer)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-steepness-layer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为提供的层中所有的神经元设置激活陡度

## 说明

```php
bool fann_set_activation_steepness_layer(resource $ann, float $activation_steepness, int $layer)
```

为层数为 `layer` 中所有的神经元设置激活陡度，将输入层计为0。

在输出层中设置激活陡度是不可能的。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_steepness`** — 激活陡度。
- **`$layer`** — 层数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_steepness()` `fann_set_activation_steepness_hidden()` `fann_set_activation_steepness_output()` `fann_get_activation_steepness()` `fann_set_activation_function()`
