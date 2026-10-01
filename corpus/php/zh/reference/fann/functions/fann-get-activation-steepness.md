---
id: "zh-php-function-function-fann-get-activation-steepness"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_activation_steepness"
title: "为提供的神经和网络层数返回激活陡度"
signature: "float fann_get_activation_steepness(resource $ann, int $layer, int $neuron)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-activation-steepness.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为提供的神经和网络层数返回激活陡度

## 说明

```php
float fann_get_activation_steepness(resource $ann, int $layer, int $neuron)
```

获取神经元数为 `neuron` 层数为 `layer`神经网络的激活陡度，将输入层数计为1层。

在输入层中是不可能获取激活陡度。

激活函数的陡度表明了激活函数从最小到最大有多块。一个高值表明将会提供一个更高效的训练。

在训练神经网络时，输出值应该处于极端(通常是 0 和 1，取决于激励函数)，一般陡峭的激活函数将会被使用(比如为1.0时)。

默认的激活陡度是0.5.

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$layer`** — 层数
- **`$neuron`** — 神经元数

## 返回值

激活陡度，当神经元在神经网络中没定义时为-1，错误时返回 `false` .

## 参见

`fann_set_activation_function()` `fann_set_activation_steepness_layer()` `fann_set_activation_steepness_hidden()` `fann_set_activation_steepness_output()` `fann_set_activation_steepness()`
