---
id: "zh-php-function-function-fann-set-output-scaling-params"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_output_scaling_params"
title: "根据训练数据计算将来使用的输出缩放参数"
signature: "bool fann_set_output_scaling_params(resource $ann, resource $train_data, float $new_output_min, float $new_output_max)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-output-scaling-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据训练数据计算将来使用的输出缩放参数

## 说明

```php
bool fann_set_output_scaling_params(resource $ann, resource $train_data, float $new_output_min, float $new_output_max)
```

根据训练数据计算将来使用的输出缩放参数

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$train_data`** — 神经网络训练数据 `资源`。
- **`$new_output_min`** — 缩放后输出数据的期望下限(不严格遵循)
- **`$new_output_max`** — 缩放后输出数据的期望上限(不严格遵循)

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_set_input_scaling_params()`
