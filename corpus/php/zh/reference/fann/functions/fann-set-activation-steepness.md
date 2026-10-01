---
id: "zh-php-function-function-fann-set-activation-steepness"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_steepness"
title: "为提供的神经元和层设置激活陡度"
signature: "bool fann_set_activation_steepness(resource $ann, float $activation_steepness, int $layer, int $neuron)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-steepness.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为提供的神经元和层设置激活陡度

## 说明

```php
bool fann_set_activation_steepness(resource $ann, float $activation_steepness, int $layer, int $neuron)
```

为层数为 `layer`，神经元数为 `neuron` 的神经元设置激活陡度，输出层的层数计为0。

为输入层中的神经元设置激活陡度是不可能的。.

激活函数的陡度表示激活从最大值到最小值有多快。一个高的激活函数值也会导致一个更积极的训练。

当训练神经网络中输出值处于一个极端值(通常为0或者1，取决于激活函数)时，可以使用陡峭的激活函数(比如 1.0)。

默认激活陡度是0.5。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_steepness`** — 激活陡度。
- **`$layer`** — 层数。
- **`$neuron`** — 神经元数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_steepness_layer()` `fann_set_activation_steepness_hidden()` `fann_set_activation_steepness_output()` `fann_get_activation_steepness()` `fann_set_activation_function()`
