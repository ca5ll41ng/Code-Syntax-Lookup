---
id: "zh-php-function-function-fann-scale-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_scale_train_data"
title: "在训练数据中缩放输入和输出到指定的范围"
signature: "bool fann_scale_train_data(resource $train_data, float $new_min, float $new_max)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-scale-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在训练数据中缩放输入和输出到指定的范围

## 说明

```php
bool fann_scale_train_data(resource $train_data, float $new_min, float $new_max)
```

在训练数据中缩放输入和输出到指定的范围。

## 参数

- **`$train_data`** — 神经网络训练数据 `资源`。
- **`$new_min`** — 在训练数据中缩放输入和输出后新的最小值。
- **`$new_max`** — 在训练数据中缩放输入和输出后新的最大值。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_scale_output_train_data()` `fann_scale_input_train_data()`
