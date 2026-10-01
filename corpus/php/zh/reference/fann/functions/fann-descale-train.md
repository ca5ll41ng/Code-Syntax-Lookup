---
id: "zh-php-function-function-fann-descale-train"
language: "php"
lang: "zh"
category: "function"
name: "fann_descale_train"
title: "基于先前计算的参数来缩小输入和输出数据"
signature: "bool fann_descale_train(resource $ann, resource $train_data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-descale-train.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 基于先前计算的参数来缩小输入和输出数据

## 说明

```php
bool fann_descale_train(resource $ann, resource $train_data)
```

基于先前计算的参数来缩小输入和输出数据。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$train_data`** — 神经网络训练数据 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_scale_train()` `fann_set_scaling_params()`
