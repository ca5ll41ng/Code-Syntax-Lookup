---
id: "zh-php-function-function-fann-test-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_test_data"
title: "使用训练数据来测试并且计算出 MSE"
signature: "float fann_test_data(resource $ann, resource $data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-test-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用训练数据来测试并且计算出 MSE

## 说明

```php
float fann_test_data(resource $ann, resource $data)
```

使用训练数据来测试并且计算出 MSE。

该函数将会更新 MSE 和 误差的值。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$data`** — 神经网络训练数据 `资源`。

## 返回值

成功，则更新 MSE, 错误则返回 `false`。

## 参见

`fann_train_on_data()` `fann_train_epoch()` `fann_get_bit_fail()` `fann_get_MSE()` `fann_set_training_algorithm()`
