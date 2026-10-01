---
id: "zh-php-function-function-fann-scale-input"
language: "php"
lang: "zh"
category: "function"
name: "fann_scale_input"
title: "在以前计算参数的基础上，在训练之前放大输入向量中的数据"
signature: "bool fann_scale_input(resource $ann, array $input_vector)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-scale-input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在以前计算参数的基础上，在训练之前放大输入向量中的数据

## 说明

```php
bool fann_scale_input(resource $ann, array $input_vector)
```

在以前计算参数的基础上，在训练之前放大输入向量中的数据。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$input_vector`** — 将要被缩放的输入向量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_descale_input()` `fann_scale_output()`
