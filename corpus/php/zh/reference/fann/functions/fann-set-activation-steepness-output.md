---
id: "zh-php-function-function-fann-set-activation-steepness-output"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_activation_steepness_output"
title: "在输出层中设置激活陡度"
signature: "bool fann_set_activation_steepness_output(resource $ann, float $activation_steepness)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-activation-steepness-output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在输出层中设置激活陡度

## 说明

```php
bool fann_set_activation_steepness_output(resource $ann, float $activation_steepness)
```

在输出层中设置激活陡度。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$activation_steepness`** — 激活陡度。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_activation_steepness()` `fann_set_activation_steepness_layer()` `fann_set_activation_steepness_hidden()` `fann_get_activation_steepness()` `fann_set_activation_function()`
